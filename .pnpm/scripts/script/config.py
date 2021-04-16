import yaml
_config = None

with open(".pnpm/config.yml", "r") as file:
    _config = yaml.load(file, Loader=yaml.FullLoader)

def config(key=None):
    if key is None:
        return _config
    if key in _config:
        return _config[key]
    return None