const switcher = document.querySelector('.btn'); // 选取页面中class为'.btn'的元素，通常是一个按钮，并赋值给变量switcher。

switcher.addEventListener('click', function() { // 为switcher元素添加一个点击事件监听器。
    document.body.classList.toggle('light-theme'); // 切换<body>元素的class，如果有'light-theme'则移除，没有则添加。
    document.body.classList.toggle('dark-theme'); // 同上，但是对'dark-theme'类进行操作。

    const className = document.body.className; // 获取<body>元素当前的className并赋值给变量className。
    if(className == "light-theme") { // 如果当前className是"light-theme"，则执行以下操作：
        this.textContent = "Dark"; // 将按钮的文本内容设置为"Dark"。
    } else { // 如果当前className不是"light-theme"，即暗色主题，则执行以下操作：
        this.textContent = "Light"; // 将按钮的文本内容设置为"Light"。
    }
});
