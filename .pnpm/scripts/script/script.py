import subprocess as sb
import sys
import json
from script import config
import os

_params = json.loads(sys.argv[1]) if len(sys.argv)>1 else {}

def params(key=None):
    if key is None:
        return _params

    key = str(key)
    if key in _params:
        return _params[key]
    return None

env = params('env') or "dev"
os.environ[f"{config('package_name')}_ENV"] = env

pkg_manager = params('use') or config('manager')

if params("reload") or env=='prod':
    sb.call(f"pip3 install -r .pnpm/requirements.txt", shell=True)
    sb.call(f"{pkg_manager} install", shell=True)

def shell(cmd):
    sb.call(cmd, shell=True)

def npm(cmd):
    shell(f"npm {cmd}")
    
def run(script):
    sb.call(f"python3 .pnpm/scripts/{script}", shell=True)

def popen(cmd):
    proc = sb.Popen(cmd, stdout=sb.PIPE, shell=True)
    return proc.communicate()[0] == 0
    
def pnpm(cmd):
    ctx = cmd.split(" ")
    passed_kwargs = dict()
    for i, e in enumerate(ctx):
        if (e.startswith('-')):
            passed_kwargs[e] = True
        elif not ctx[i-1].startswith('-'):
            passed_kwargs[str(i)] = e
        else:
            passed_kwargs[ctx[i-1]] = e

    print('ctx', passed_kwargs)

    shell(f"python3 .pnpm/scripts/{ctx[0]} '{json.dumps(passed_kwargs)}'")
