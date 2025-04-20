#!/bin/sh

# Function to check if the port is open (i.e., the database is up)
check_db() {
  host=$1
  port=$2
  while ! nc -z "$host" "$port"; do
    echo "Waiting for database to be up..."
    sleep 1
  done
}

# Check if the database is available before generating Prisma
echo "Checking if the database is up..."
check_db "db-app" 3306  # Replace with your DB container name and port if different

# Now run Prisma generate after the database is available
echo "Generate Prisma"
npx prisma generate

# Check if Prisma generation was successful and start the development server
if [ $? -eq 0 ]; then
  echo "Prisma generation successful. Starting development server..."
  npm run start:dev
else
  echo "Prisma generation failed. Development server not started."
fi

exit 0
