# libsql-expo

This project is a minimal reproduction of using libsql drizzle and expo router v3.

## Installation

To install the necessary dependencies, run the following command:

```bash
npm install
```

## Setup

You will need a turso database to connect to. Then, create a `.env` file in the root of the project with the following content:

```bash
cp .env.example .env
```

Then, replace the `DATABASE_URL` and `DATABASE_TOKEN` with the appropriate values. For example:

```bash
DATABASE_URL="libsql://..."
DATABASE_TOKEN="..."
```

## Running the project

To run the project, run the following command:

```bash
npm start
```
