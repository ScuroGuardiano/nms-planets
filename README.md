# nms-planets

## Running project
1. Install node and npm
2. Install yarn: `npm install --global yarn`
3. Clone repo and cd to it
4. `yarn install`
5. `yarn start`
6. Go to http://localhost:4200

## Creating user
```sh
curl --request POST \
  --url http://localhost:1337/api/auth/register \
  --header 'Content-Type: application/json' \
  --data '{
	"username": "<username>",
	"password": "<password>"
}'
```
