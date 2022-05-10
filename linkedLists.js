//linked list are list of objects that contain
//the element and the value of the next element in the list
//i.e: {value: "some value", next: {nextObject}}
//values can be anything

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value){
        const newNode = { value: value, next: null};

        //sets the next value of previous node to the created node
        if(this.tail) {
            this.tail.next = newNode;
        }

        //makes the created node the new tail
        this.tail = newNode;

        //if your at beginning of list
        if(!this.head){
            this.head = newNode;
        }

    }

    prepend(value){
        const newNode = { value: value, next: this.head};
        this.head = newNode;

        if(!this.tail) {
            this.tail = newNode;
        }

    }

    insertAfter(value, afterValue){
        const existingNode = this.find(afterValue)

        if(existingNode){
            const newNode = { value: value, next: existingNode.next};
            existingNode.next = newNode;
        }
    }

    find(value){
        if(!this.head){
            return null;
        }

        let currentNode = this.head;

        while(currentNode){
            if(currentNode.value === value){
                return currentNode;
            }
            currentNode = currentNode.next
        }

        return null;
    }

    //deleting in linked list is done by changing the next value of previous element
    delete(value){
        if(!this.head){
            return null;
        }

        //for deleting first value
        while(this.head && this.head.value === value){
            this.head = this.head.next
        }

        let curNode = this.head;

        //for deleting subsequent values
        while(curNode.next) {
            if(curNode.next.value === value){
                curNode.next = curNode.next.next
            } else {
                //set current node to current node's next value
                curNode = curNode.next
            }

            if(this.tail.value === value){
                this.tail = curNode;
            }
            
            
        }
    }


    //displays LinkedList 
    toArray(){
        const elements = []
        let currentNode = this.head;

        //will eventually return null because no next value
        while(currentNode){
            //puts the current value in list
            elements.push(currentNode);
            currentNode = currentNode.next;
        }

        return elements;
    }
}