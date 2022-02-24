import Nav from "./nav";

const Header = {
    render() {
        return /* html */` 
        <header class="max-w-full mx-auto">

            <div class="bg-blue-300 nav-1 flex justify-around items-center">
                <div class="logo">
                  <img src="https://cdn.tgdd.vn/Files/2021/03/31/1339531/xiaomi-gay-tranh-cai-voi-logo-moi--2.jpg" class="w-[150px] logo_header" alt="">
                </div>

                <div class="search">
                  <input type="search" placeholder="Tìm kiếm ..." class="p-[5px] w-[430px] text-[14px] border-orange-600">
                  <button><i text-orange-700 class="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div class="cart">
                  <i class="fa-solid fa-cart-plus text-orange-900 text-[20px]"></i>
                </div>

            </div>
            <div class="bg-red-500 nav-1" id="main-menu">
                ${Nav.render()}
            </div>
        </header>`;
    },
    afterRender(){
      Nav.afterRender();
    }
};
export default Header;