#!/bin/bash

npm run build

if [ -d "dist" ]; then
    cd dist

    npx http-server -p 5173
else
    echo "Error: 'dist' directory not found."
fi
