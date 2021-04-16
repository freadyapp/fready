from rich import console as _console, print, inspect
console = _console.Console()

from .config import config
from .script import * 


import json
import os
import sys
import time

class spawn():
    def __init__(self, signature, *a, **k):
        self.signature = signature
        self.start = time.time()
        process(signature, *a, **k)
        self.log()
    
    def log(self, *a, **k):
        pipe = "┣"  
        if (len(a) == 0): pipe = "┃"
        console.print(f"[dim]{pipe}", " ".join(a), **k, style="white")
    
    def warn(self, *a, **k):
        # pipe = "┃"
        warn(f"[dim white]", "".join(a), **k)

    def fail(self, msg="Fail"):
        self.log()
        self.done(msg, "red")

    def done(self, msg=None, color="green"):
        if msg is None:
            self.log()
            msg = "Done" 
        console.print("[dim]┗", f"[bold {color}]{msg}", f"in {round(time.time()-self.start, 3)} seconds\n")
    
    def input(self, msg=None, options=""):
        if msg is None:
            self.log()
            msg = "" 

        console.print("[dim]┗", f"[bold italic]{msg}")
        return input(f"{options} ⇝ ")

def warn(*args, **kwargs):
    console.print("× ", *args, **kwargs, style="#FF851B bold")


def process(*a, **k):
    console.print("\n[dim white]┏", "[bold]" + " ".join(a), **k, style="cyan")

def info(*args, **kwargs):
    console.print("\n┏", "[bold]" + " ".join(args), **kwargs, style="cyan")
    

def success(*args, **kwargs):
    console.print("\n ", *args, **kwargs, style="cyan")

def status(cmd):
    return console.status(f"Running [italic bold]{cmd}...", spinner="arrow3", spinner_style="cyan")
