# Scheduling and sleeping

Most of the time you use buttons or events to run a function in your Tukaan app. However, there are times, when you need to add some delay to it, or wait (sleep) some time (eg. with `time.sleep`).<br>Well, in a GUI application you can't do that. While suspending the execution, the event loop still needs to dispatch all sorts of window management and mouse movement events. You can read in detail on blocking the event loop [here](/docs/advanced/blocking).


## Using the Timer

### Sleeping
If you need to wait some time like `time.sleep`, you can use Tukaan's `Timer.wait` method instead.

With `Timer.wait` you can sleep a specified time in seconds, just like `time.sleep`. However it doesn't block the event loop, only the current thread, so your GUI doesn't appear frozen.
```python
tukaan.Timer.wait(10)
```

### Scheduling functions
With the `Timer.schedule` method you can schedule a function to run after the specified time. The countdown will start immediately.

You can pass positional and keyword arguments to this method with the `args` and `kwargs` parameters, so you don't have to use lambda functions when you want to add arguments to the callback.
With `Timer.schedule` you can schedule a function in the event loop to run after a specified time (in seconds).
```python
def my_func(*args, **kwargs):
    print(args, kwargs)

tukaan.Timer.schedule(10, my_func, args=("a", "r", "g"), kwargs={"kwarg": True})
```

### Add a delay to a function
Instead of putting a `Timer.wait` to the beginning of a function, you can decorate it with the `Timer.delay` method.
```python
@tukaan.Timer.delay(10)
def my_func():
    print("10 secs is up!")

my_func()  # Waits 10 secs before printing
```


## The `Timeout`

The `Timeout` class is very similar to the `Timer.schedule` method, but it gives a lot more control on the countdown. You can start it whenever you want, cancel or repeat it, and start over the same Timeout. So it depends on your need whether you use `Timer.wait` or the `Timeout` class

```python
def my_func():
    print("10 secs is up! Starting over.")
    timeout.start()  # Start the same timeout again

timeout = Timeout(10, my_func)
timeout.start()  # The start method starts the countdown
```

### Cancelling a pending timeout
You can cancel a pending countdown with the `.cancel` method. This method will raise an error, if the timeout has already run or hasn't yet been started.

```python
timeout.cancel()
```

### Repeating a timeout
The `.repeat` method will start the countdown, and repeat it over and over when it's finished.

```python
timeout.repeat()
```