### docker running

```bash
$ docker-compose up --build
```

### ab testing

ab tool is benchmarking tool with `http/1.0``

ab full name is Apache Bench

* options

n: 성능 검사를 위해 보내는 요청 수
c: 동시 접속수(client)

```bash
$  ab -n 5 -c 5 http://localhost:8080
```

총 5개의 요청을 동시에 5개의 클라이언트에서 동시에 요청

```bash
$  ab -n 5 -c 1 http://localhost:8080
```

총 5개의 요청을 동시에 1개의 클라이언트에서 동시에 요청

* results

```
$ ab -n 5 -c 5 http://localhost:8080/

This is ApacheBench, Version 2.3 <$Revision: 1901567 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient).....done


Server Software:        nginx/1.21.5
Server Hostname:        localhost
Server Port:            8080

Document Path:          /         #경로
Document Length:        1 bytes   #문서 크기

Concurrency Level:      5
Time taken for tests:   1.007 seconds                  # 전체 테스트 소요시간
Complete requests:      5                              # 응답 완료한 요청수
Failed requests:        1                              # 실패한 요청수
   (Connect: 0, Receive: 0, Length: 1, Exceptions: 0)
Non-2xx responses:      1
Total transferred:      1211 bytes
HTML transferred:       173 bytes
Requests per second:    4.97 [#/sec] (mean)            # 초당 응답 요청수
Time per request:       1006.629 [ms] (mean)           # 요청당 응답시간
Time per request:       201.326 [ms] (mean, across all concurrent requests)
Transfer rate:          1.17 [Kbytes/sec] received     # 초당 전송량

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.1      0       0
Processing:     3  402 432.1    500    1000
Waiting:        3  402 432.3    500    1000
Total:          4  402 432.2    501    1000

Percentage of the requests served within a certain time (ms)
  50%    335
  66%    666
  75%    666
  80%   1000
  90%   1000
  95%   1000
  98%   1000
  99%   1000
 100%   1000 (longest request)
```