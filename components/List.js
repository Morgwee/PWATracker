var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

export default function List() {
    var _React$useState = React.useState([]),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        items = _React$useState2[0],
        setItems = _React$useState2[1];

    React.useEffect(function () {
        fetch("/data/PWA%20Tracker.json").then(function (res) {
            return res.json();
        }).then(function (data) {
            var linkItems = [];
            data.Resources.forEach(function (item) {
                var linkItem = React.createElement(
                    "div",
                    { key: item.url },
                    React.createElement(
                        "a",
                        { href: item.url, target: "_blank" },
                        item.title
                    )
                );
                linkItems.push(linkItem);
            });
            setItems(linkItems);
        });
    }, []);

    return React.createElement(
        "div",
        null,
        items
    );
}