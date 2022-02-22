import socketio

sio = socketio.Client()

@sio.event
def connect():
    print("conectou!!!")
    port = str(input("Port: "))
    while True:
        action = str(input("On/Off: ")).upper().strip()[0:2]
        if (action == "ON"):
            sio.emit("to_on",port)
        else:
            sio.emit("to_off",port)

sio.connect("http://localhost:5000/")  # url
sio.wait()