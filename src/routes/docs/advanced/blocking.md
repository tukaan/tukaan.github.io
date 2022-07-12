# Blocking the event loop

If you do long-running operations in your GUI program, like `time.sleep(10)`, it will block the event loop from running, thus prevent it from processing events and redrawing the GUI, so neither the user nor the operating system (windowmanager) can interact/communicate with the window. For example Windows marks the window as "Not responding" after 5 seconds.

> In a GUI application you shouldn't do things that take longer than 0.1 seconds.\
> But in case you need to do it, let's look at what options we have.

## Threading
Unfortunately, Tukaan isn't thread-safe because it would make it significantly slower. This means that you can't call most of Tukaan's functions outside the main thread (e.g. you can generate a event in another thread, but you can't create an image). However there are some ways to communicate between the threads, let's look at them!

### Using virtual events
A really nice way to communicate between threads in Tukaan is to use custom [virtual events](/docs/misc/events#virtual-events)).
With the `event_generate` method you can post a virtual event to the event loop, which will handle it, and you can even send arbitary Python objects as data with it.

Here you can see that that the program starts a second thread, and the `time.sleep(4)` will block it for 4 seconds. Then it sends a virtual event to the event loop. This event has a function bound to it that will run in the main thread.
```python
import threading
import time
import tukaan

app = tukaan.App()

def this_is_a_blocking_func():
    time.sleep(4)  # Block the thread
    this_is_a_data = "Hi! I'm from another thread!"
    app.generate_event("<<VirtualEventFromAnotherThread>>", data=this_is_a_data)

def event_receiver(event):
    print(f"Event received with data: {event.data}")

app.bind("<<VirtualEventFromAnotherThread>>", event_receiver, send_event=True)

threading.Thread(target=this_is_a_blocking_func).start()

app.run()
```