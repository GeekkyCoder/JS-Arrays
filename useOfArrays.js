let arr = [
  { id: "wm_cJA1iFeD78t0hqoHAx", body: "asdasasda"},
  { id: "Iooah8tHG-i9Ejqj79ATq", body: "dggdfg" },
  { id: "-eEdlahG4Oo1CIoiFwdlx", body: "burther" },
  { id: "8xNHA2CYpZOmZCusGc6it", body: "ffgdfgdfg" },
  { id: "N5hzAl6dMK1-UzdRzf84B", body: "sdasdasdaa" },
  { id: "VFxZ_6X4pJv84ZJf-bKIb", body: "fgfgdgsdg↵" },
  { id: "GuA1tvu5nIyILFhudg8ID", body: "snasmdb" },
];

// function to push a clicked item to the top of the array
function pushToTop(id) {
  let newArray = [];
  return arr.map((item) => {
    if (item.id === id) {
      newArray.unshift({ ...item, body: "hello burther" });
    } else {
      newArray.push(item);
    }
    return newArray;
  });
}

// function to delete an item from the array
function deleteItem(id) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id !== id) {
      newArray.push(arr[i]);
    } else {
      newArray.splice(i, 1);
    }
  }
  return newArray;
}

console.log(pushToTop(arr[4].id));
console.log(deleteItem(arr[6].id));
