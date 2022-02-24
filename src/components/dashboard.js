
const Dashboard = { 
     render() {
        
        return /* html */`
        <nav class="bg-gray-200 drop-shadow-md">
        <ul class="flex justify-center pt-[12px] flex-col items-start">
          <li class="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono margin_bot_danhmuc text_color_red">
            <a href="/admin/">Dashboard</a>
          </li>
          <li class="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono margin_bot_danhmuc">
            <a href="/admin/danh-muc">Bảng Danh mục</a>
          </li>
          <li class="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono margin_bot_danhmuc">
            <a href="/admin/san-pham">Bảng Sản Phẩm</a>
          </li>
          <li class="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono margin_bot_danhmuc">
            <a href="/admin/user">Bảng Người Dùng</a>
          </li>
          <li class="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono margin_bot_danhmuc">
            <a href="/">Về website</a>
          </li>
        </ul>
      </nav>


        `;
    }
}

export default Dashboard;