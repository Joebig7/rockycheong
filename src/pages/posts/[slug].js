export default function BlogDetail({ posts }) {
  return <>posts</>;
}


export async function getStaticPaths() {
    
    
    
    //进行外部request api 请求,这边模拟数据
    const res = await fetch(
      "https://d61fb5cc-b1dc-44b1-a06b-60428a80ba01.mock.pstmn.io/blog-id"
    );
  
    const posts = await res.json();
    // 获取需要渲染的路径id编号
    const paths = posts.map((post) => ({
      params: { id: String(post.id) },
    }));
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
  }

}