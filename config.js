const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:8080", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                    credentials: true
                }
            ]
        }
    }
}
