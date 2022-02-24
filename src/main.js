import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/about";
import AdminPost from "./pages/admin/danhmuc";
import AddPost from "./pages/admin/danhmuc/add";
import updateDanhMuc from "./pages/admin/danhmuc/update";
// sản phẩm
import SanPham from "./pages/admin/sanpham";
import AddSanPham from "./pages/admin/sanpham/add";
import updateSanPham from "./pages/admin/sanpham/update";

// Giỏ hàng
import CartPage from "./pages/cartPage";
// dashboard
import AdminDashboard from "./pages/admin/";
import HomePage from "./pages/home";
import NewsDetail from "./pages/newsDetail";
import Signin from "./pages/signin";
import Signup from "./pages/signup";



const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
  document.getElementById("content").innerHTML = await content.render(id);

  if(content.afterRender) content.afterRender(id);
};


router.on('/admin/*/',  () => {
  console.log('truy cap duong dan admin/*')
}, {
  before(done, match) {
      if(localStorage.getItem('user')){
        const role = JSON.parse(localStorage.getItem('user')).role;
        if(role == 1){
            done();
        } else {
            document.location.href="/"
        }
      } else{
        document.location.href="/"
      }
    
  },
});

router.on({
  "/": () => {
    print(HomePage);
  },
  "/about": () => {
    print(AboutPage);
  },
  "/news/:id": ({ data }) => {
    const { id } = data;
    print(NewsDetail, id);
  },
  "/admin/": () => print(AdminDashboard),
  "/admin/danh-muc": () => print(AdminPost),
  "/admin/news/add": () => print(AddPost),
  "/admin/danh-muc/:id/update":({data}) => {
    print(updateDanhMuc,data.id)

  },

  "/cart": () => print(CartPage),

  "/admin/san-pham": () => print(SanPham),
  "/admin/san-pham/add": () => print(AddSanPham),
  "/admin/san-pham/:id/update":({data}) => {
    print(updateSanPham,data.id)

  },

  // đăng nhập đăng ký
  "/signup": () => print(Signup),
  "/signin": () => print(Signin)
});

router.resolve();

