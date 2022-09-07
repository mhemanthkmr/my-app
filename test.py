import http.client

conn = http.client.HTTPSConnection("rpc.xinfin.network")

payload = "{\"jsonrpc\":\"2.0\",\"method\":\"eth_getBalance\",\"params\":[\"xdc8e7f57c43bd3a5109a93b9868b4a69e8b0b89fa0\",\"latest\"],\"id\":1}"

# headers = "{"content-type': "application/json"}"

conn.request("POST", "//getBalance", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
