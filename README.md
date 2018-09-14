## Node.js simple logger

### Usage:

1. Server accepts only json requests, so set `content-type` header to `application/json`
2. send **POST** request with json data to log server

### Examples:

Example json data:
```
{
	"stack": "Error: some error
	at Object.<anonymous> (/home/user/tmp/node-logger/index.js:7:13)
	at Module._compile (module.js:641:30)
	at Object.Module._extensions..js (module.js:652:10)
	at Module.load (module.js:560:32)
	at tryModuleLoad (module.js:503:12)
	at Function.Module._load (module.js:495:3)
	at Function.Module.runMain (module.js:682:10)
	at startup (bootstrap_node.js:191:16)
	at bootstrap_node.js:613:3",
	"message":"some error"
}
```

CURL:
```
curl -X POST \
  http://localhost:3000/ \
  -H 'content-type: application/json' \
  -d '{
	"stack": "Error: some error
	at Object.<anonymous> (/home/user/tmp/node-logger/index.js:7:13)
	at Module._compile (module.js:641:30)
	at Object.Module._extensions..js (module.js:652:10)
	at Module.load (module.js:560:32)
	at tryModuleLoad (module.js:503:12)
	at Function.Module._load (module.js:495:3)
	at Function.Module.runMain (module.js:682:10)
	at startup (bootstrap_node.js:191:16)
	at bootstrap_node.js:613:3",
	"message":"some error"
}'
```