import { ethers } from "ethers";
import { abi, contractAddress } from "../config";

let provider;
let readContract;
let writeContract;

if (window.ethereum) {
  provider = new ethers.BrowserProvider(window.ethereum);
  readContract = new ethers.Contract(contractAddress, abi, provider);
  const signer = await provider.getSigner();
  writeContract = new ethers.Contract(contractAddress, abi, signer);
} else {
  console.error(
    "Ethers.js: Web3 provider not found. Please install a wallet with Web3 support."
  );
}

export const TodoService = {
  async createTodo(todoText) {
    try {
      const result = await writeContract.createTodo(todoText);
      await result.wait();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  async toggleTodo(todoId) {
    try {
      await writeContract.toggleTodo(todoId);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  async getTodos() {
    try {
      const todoIds = await readContract.getTodoIds();
      const todos = await Promise.all(
        todoIds.map(async (id) => {
          const todo = await readContract.todos(id);
          return { id: todo.id, text: todo.text, completed: todo.completed };
        })
      );
      return todos.filter((todo) => todo.id > 0);
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  async deleteTodo (todoId) {
    try {
      await writeContract.removeTodo(todoId);
      return true;
    } catch (error) {
      console.error("Failed to delete todo:", error);
      return false;
    }
  },
};
