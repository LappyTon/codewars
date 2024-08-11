class PaginationHelper {
	constructor(collection, itemsPerPage) {
		this.collection = collection;
		this.itemsPerPage = itemsPerPage;
	}
	itemCount() {
		return this.collection.length;
	}
	pageCount() {
		return Math.ceil(this.collection.length / this.itemsPerPage);
	}
	pageItemCount(pageIndex) {
		if (pageIndex < 0 || pageIndex >= this.pageCount()) {
			return -1; 
		}
		const startIndex = pageIndex * this.itemsPerPage;
		const endIndex = startIndex + this.itemsPerPage;
		return Math.min(endIndex, this.collection.length) - startIndex;
	}
	pageIndex(itemIndex) {
		if (itemIndex < 0 || itemIndex >= this.collection.length) {
			return -1; // Return -1 for invalid itemIndex
		}
		return Math.floor(itemIndex / this.itemsPerPage);
	}
}


var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
console.log(

helper.pageCount(), // should == 2
helper.itemCount(), // should == 6
helper.pageItemCount(0), // should == 4
helper.pageItemCount(1), // last page - should == 2
helper.pageItemCount(2), // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5), // should == 1 (zero based index)
helper.pageIndex(2), // should == 0
helper.pageIndex(20), // should == -1
helper.pageIndex(-10), // should == -1

);