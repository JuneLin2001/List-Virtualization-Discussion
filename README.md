# List Virtualization Discussion
List Virtualization Discussion 是一個用於演示「列表虛擬化 (List Virtualization)」技術的範例網站。  
> [網站連結](https://junelin2001.github.io/List-Virtualization-Discussion/#/UsingListVirtualization)


## 功能介紹
- 使用 List Virtualization: 只渲染可見範圍內的列表項，減少 DOM 節點數量，提升性能。
- 不使用 List Virtualization: 渲染整個列表，適合數據量較少的場景。

## Built With

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)

實現List Virtualization 功能：[react-window](https://github.com/bvaughn/react-window)  
隨機用戶與隨機貼文：[Faker.js](https://fakerjs.dev/)


## Run Locally

Clone the project

```bash
  git clone https://github.com/JuneLin2001/List-Virtualization-Discussion.git
```

Install dependencies

```bash
  npm install
```

Start the project

```bash
  npm run dev
```

## Acknowledgements

 - [Can React alone render 1 million rows?](https://www.youtube.com/watch?v=1JoEuJQIJbs&t=94s)
 - [React-window | 有效地呈現大型列表與表格](https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/virtualize-long-list-with-react-window-95bac3673a91)

