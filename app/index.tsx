import { useEffect, useState } from "react";
import { Text, View, Button, TouchableOpacity, Pressable } from "react-native";

export default function Page() {
  const [data, setData] = useState<string | null>(null);
  useEffect(() => {
    fetch("/api/db-test")
      .then((res) => res.json())
      .then((data) => setData(JSON.stringify(data)));
  }, []);

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: "auto",
        backgroundColor: "white",
        gap: 20,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "black",
          textAlign: "center",
        }}
      >
        API reponse:
      </Text>
      <Text
        style={{
          fontSize: 18,
          color: "black",
          textAlign: "center",
        }}
      >
        {data}
      </Text>
      <Pressable
        onPress={() => {
          fetch("/api/db-test", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: "Hello from the client!" }),
          }).then(() => {
            fetch("/api/db-test")
              .then((res) => res.json())
              .then((data) => setData(JSON.stringify(data)));
          });
        }}
        style={{
          padding: 10,
          backgroundColor: "black",
          borderRadius: 5,
        }}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          Send
        </Text>
      </Pressable>
    </View>
  );
}
