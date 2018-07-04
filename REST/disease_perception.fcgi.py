#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# coding: utf-8

import sys, os

import libs.app

from flup.server.fcgi import WSGIServer

# Creating the object holding the state of the API
if hasattr(sys, 'frozen'):
	basis = sys.executable
else:
	basis = sys.argv[0]

api_root = os.path.split(basis)[0]

# Connection to the database
dbpath = os.path.join(api_root,'DB','net_comorbidity.db')
app = libs.app.init_comorbidities_app(dbpath)

if __name__ == '__main__':
	WSGIServer(app).run()
