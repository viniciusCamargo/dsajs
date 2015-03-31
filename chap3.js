// A list class implementation
function List() {
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = [];
	// this.clear = clear;
	this.find = find;
	this.toString = toString;
	// this.insert = insert;
	this.append = append;
	this.remove = remove;
	// this.front = front;
	// this.end = end;
	// this.prev = prev;
	// this.next = next;
	this.length = length;
	// this.currPos = currPos;
	// this.moveTo = moveTo;
	// this.getElement = getElement;
	// this.contains = contains;
}

// Append: adding an element to a list
function append(element) {
	this.dataStore[this.listSize++] = element;
}

// Remove: removing an element from a list
function find(element) {
	for (var i = 0; i < this.dataStore.length; ++i) {
		if (this.dataStore[i] == element) {
			return i;
		}
	}
	return -1;
}

// Find: finding an element in a list
function remove(element) {
	var foundAt = this.find(element);
	if (foundAt > -1) {
		this.dataStore.splice(foundAt,1);
		--this.listSize;
		return true;
	}
	return false;
}

// Length: determining the number of elements in a list
function length() {
	return this.listSize;
}

// toString: retrieving a list’s elements
function toString() {
	return this.dataStore;
}

// test the implementation so far
var names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
console.log(names.toString());