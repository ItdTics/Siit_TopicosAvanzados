import web
import json

#      \b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b. expresiones regulares
class Application(web.application):
    def run(self, port=1234, *middleware):
        func = self.wsgifunc(*middleware)
        return web.httpserver.runsimple(func,('0.0.0.0',port))


