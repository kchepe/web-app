#!/bin/sh

echo "Generate Prisma"
npx prisma generate

if [ $? -eq 0 ]; then
  echo "Prisma generation successful. Starting development server..."
  npm run start:dev
else
  echo "Prisma generation failed. Development server not started."
fi

exit 0
