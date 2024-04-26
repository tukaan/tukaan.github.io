# Working with tabs: The `TabView` widget

![Image of a Tukaan tabview](/resources/docs/tabview.png)

The `TabView` widget allows you to have multiple tabs where you can place widgets like any other container widget. An example of how to set up a TabView widget is as follows:

```python
import tukaan


app = tukaan.App()
window = tukaan.MainWindow(title="Test TabView widget")

# Create tabview
tabview = tukaan.TabView(window)
tabview.grid(margin=20)

# Create tabs
tab_1 = tabview.Tab("Tab 1")
tab_2 = tabview.Tab("Tab 2")

# Add tab contents
button_1 = tukaan.Button(tab_1, "Button in tab 1")
button_1.grid(margin=20)

button_2 = tukaan.Button(tab_2, "Button in tab 2")
button_2.grid(margin=20)

app.run()
```

## `Tab` Options

The `TabView` widget allows users to create `Tab`'s as shown above that act as `Container`'s. The unique methods available to `Tab`'s and a description of each method are as follows:

| Method | Description|
|-|-|
| `.select()` | Sets the `Tab` showing in the `TabView` to the `Tab` this is called on |
| `.move(new_index: int)` | Moves the `Tab` to the specified index in the ordering (left to right) of the `TabView` |
| `.hide()` | Hides the `Tab` visually but is still considered to be in the `TabView` |
| `.unhide()` | Shows the `Tab` again where it was before |
| `.remove()` | Removes the `Tab` from the `TabView`, and can only be shown again by calling `.append()` |
| `.append()` | Adds the `Tab` to the `TabView` at the end of the line |

Additionally the `Tab` also has the following unique attributes:
| Atrribute | Type | Description |
|-|-|-|
| `enabled` | `bool` | Changes the `Tab` to either be enabled or disabled |
| `title` | `str` | Changes the displayed name of the `Tab` |
| `icon` | `Icon` or `Image.Image` | Displays the given icon (left side by default) |
| `image_pos` | `str` | Sets the position of the icon in the specified direction |
| `margin` | `int` or `tuple[int, ...]` | Sets the margins of the `Tab` |

## `TabView` Options

The `TabView` also has a couple useful methods. They go as follows:

| Method| Description|
|-|-|
| `.on_tab_change(func: Callable[[Tab | None], None]) -> Callable[[], None]` | Binds a function that is called any time tab is changed |
| `.enable_keyboard_traversal()` | Enables navigating the tabs with the keyboard
| `.index(self, tab: Tab) -> int` | Returns the index of a given `Tab` inside the `TabView` |

It also has the following attribute:

 Atrribute | Type | Description |
|-|-|-|
| `selected` | `Tab` | Changes the selected `Tab` to the be the one its set equal to |