Given the DOM below, draw the corresponding virtual DOM diagram.

```
<div id="app">
  <h1>TODOs</h1>
  <input type="text" placeholder="What needs to be done?">

  <ul>
    <li>
      <input type="checkbox">
      <label>Buy milk</label>
      <button>Remove</button>
    </li>
    <li>
      <input type="checkbox">
      <label>Buy eggs</label>
      <button>Remove</button>
    </li>
  </ul>
</div>
```

My answer:

```
{
    type: 'element',
    tag: 'div',
    props: {id: 'app'},
    children: [
        {
            type: 'element',
            tag: 'h1',
            children: [
                {
                    type: 'text',
                    value: 'TODOs'
                }
            ],
        },
        {
            type: 'element',
            tag: 'input',
            props: {type: 'text', placeholder: 'What needs to be done?'}
        },
        {
            type: 'element',
            tag: 'ul',
            children: [
                {
                    type: 'element',
                    tag: 'li',
                    children: [
                        {
                            type: 'element',
                            tag: 'checkbox',
                        },
                        {
                            type: 'element',
                            tag: 'label',
                            children: [
                                {
                                    type: 'text',
                                    value: 'Buy milk',
                                }
                            ]
                        },
                        {
                            type: 'element',
                            tag: 'button',
                            children: [
                                {
                                    type: 'text',
                                    value: 'Remove'
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'element',
                    tag: 'li',
                    children: [
                        {
                            type: 'element',
                            tag: 'checkbox',
                        },
                        {
                            type: 'element',
                            tag: 'label',
                            children: [
                                {
                                    type: 'text',
                                    value: 'Buy eggs',
                                }
                            ]
                        },
                        {
                            type: 'element',
                            tag: 'button',
                            children: [
                                {
                                    type: 'text',
                                    value: 'Remove'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

```
