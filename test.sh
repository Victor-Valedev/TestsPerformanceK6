#testando pelo curl
curl --request POST \
    --url http://localhost:3333/signup \
    --header 'Content-Type: application/json' \
    --data '{"email": "victorqa@gmail.com", "password": "pwd123"}'
