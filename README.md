# Data Structures

This repository is for sharing the data structure implementations using different programming languages. And all contributions are most welcome.

### Current languages:
- JavaScript
- Python

### Run JavaScript tests:
```bash
$ npm install -g jasmine
$ npm test
```

### Run Python tests:
```bash
$ chmod +x testpy.sh
$ ./testpy.sh
```

### Directory/File names convention:
- If you will implement a new data structure, so you need to create a directory for it firstly.
- Directory name must use `[a-z]` *lowercase*, and `_` only *(1).

- If you will add a new language implemention, you need to create a directory for it inside the data structure directory using the same convention in (1).
- Add a suffix `_{storage_name}` after the data structure name (i.e. `array_string` Implements Array DT using String as a storage).

### Writing tests:
- JavaScript:
  - We are using `Jasmine` framework for writing the unit tests.
  - Test file name convention: Add suffix`_spec` to the data structure name (i.e. `array_spec.js`).

- Python:
  - We are using `unittest` standard Python library for writing the unit tests.
  - Test file name convention: Add prefix `test_` to the data structure name (i.e. `test_array.py`).


