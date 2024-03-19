// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract TodoList {
    uint256 public todoCount = 0;

    struct Todo {
        uint256 id;
        string text;
        bool completed;
    }

    mapping(uint256 => Todo) public todos;
    uint256[] public todoIds; // Ny array för att spara todo-ID:n

    event TodoCreated(uint256 id, string text, bool completed);
    event ToggleTodo(uint256 id, bool completed);
    event RemovedTodo(uint256 id);

    function createTodo(string memory _content) public {
        todoCount++;
        todos[todoCount] = Todo(todoCount, _content, false);
        todoIds.push(todoCount); // Lägg till det nya todo-ID:t i arrayen
        emit TodoCreated(todoCount, _content, false);
    }

    // Ny funktion för att hämta en lista över todo-ID:n
    function getTodoIds() public view returns (uint256[] memory) {
        return todoIds;
    }

    function toggleTodo(uint256 _id) public {
        Todo memory t = todos[_id];
        t.completed = !t.completed;
        todos[_id] = t;
        emit ToggleTodo(_id, t.completed);
    }

    function removeTodo(uint256 _id) public {
        delete todos[_id];
        emit RemovedTodo(_id);
    }

    constructor() public {
        createTodo("Hello world");
    }
}
