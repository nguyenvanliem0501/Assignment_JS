import axios from "axios";
import { add } from "../../../api/sanpham";
import { getAll } from "../../../api/danhmuc";
import Dashboard from '../../../components/dashboard';
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const AddSanPham = {
   async render(){
        const { data } = await getAll()
        return /*html*/`
        <div id="header">
                ${Dashboard.render()}
            </div>
            <div class="max-w-7xl mx-auto py-6 ">
      <!-- Replace with your content -->
		<div class="flex flex-col">
		<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
				<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
					<form action=""  id="formAddPost">
						<div class="shadow overflow-hidden sm:rounded-md">
							<div class="px-4 py-5 bg-white sm:p-6">
								<div class="grid grid-cols-6 gap-6">
									<div class="col-span-6 sm:col-span-3">
										<label for="product-name" class="block text-sm font-medium text-gray-700">Tên điện thoại</label>
										<input type="text" name="title-sp" id="title-sp" placeholder="Nhập tên điện thoại"
											class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
									</div>

									<div class="col-span-6 sm:col-span-3">
										<label for="img-sp"
											class="block text-sm font-medium text-gray-700">Ảnh</label>
										<input type="file" name="img-sp" id="img-sp"
											class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
									</div>

                                    <div class="col-span-6 sm:col-span-3 my-5">
										<label for="select-category" class="block text-sm font-medium text-gray-700">Chọn danh mục muốn thêm</label>
											<select name="select-category" id="danhmuc-sp" class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                            ${data.map((danhmuc, index) => {
			                                        return /*html*/ `
                                                    <option value="${danhmuc.id}">${danhmuc.title}</option>
													`
		                                            })}
											</select>
									</div>

                                    <div class="col-span-6 sm:col-span-3">
										<label for="tinhtrang-sp" class="block text-sm font-medium text-gray-700">Tình trạng máy</label>
										<input type="text" name="tinhtrang-sp" id="tinhtrang-sp" placeholder="Nhập tình trạng máy"
											class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
									</div>

                                    <div class="col-span-6 sm:col-span-3">
                                    <label for="baohanh-sp" class="block text-sm font-medium text-gray-700">Ngày bảo hành</label>
                                    <input type="date" name="baohanh-sp" id="baohanh-sp" placeholder="Chọn Ngày bảo hành"
                                        class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
										<label for="tronbo-sp" class="block text-sm font-medium text-gray-700">Trọn bộ</label>
										<input type="text" name="tronbo-sp" id="tronbo-sp" placeholder="Nhập trọn bộ"
											class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
									</div>

                                    <div class="col-span-6 sm:col-span-3">
										<label for="mau-sp" class="block text-sm font-medium text-gray-700">Màu sắc</label>
										<input type="text" name="mau-sp" id="mau-sp" placeholder="Nhập màu sắc"
											class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
									</div>

									<div class="col-span-6 sm:col-span-4">
										<label for="desc-sp" class="block text-sm font-medium text-gray-700">giới thiệu điện thoại</label>
										<textarea type="text" name="desc-sp" id="desc-sp"
											class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
									</div>
									<div class="col-span-6 sm:col-span-3">
										<label for="price-sp"
											class="block text-sm font-medium text-gray-700">Giá</label>
										<input type="number" min="0" name="price-sp" id="price-sp" placeholder="Nhập giá sản phẩm"
											class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
									</div>
										<div class="col-span-6 sm:col-span-3">
										<label for="quantity-sp"
											class="block text-sm font-medium text-gray-700">Số lượng</label>
										<input type="number" min="0" name="quantity-sp" id="quantity-sp" placeholder="Nhập số lượng"
											class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
									</div>

									</div>
                                    </div>
							</div>
							<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
								<button type="submit"
									class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
									Thêm Mới
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
        `
    },
    afterRender(){
        const formAddPost = document.querySelector('#formAddPost');
        const CLOUDINARY_PRESET_KEY = "fmwvygqx";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/deob8p0s0/image/upload";

        formAddPost.addEventListener('submit', async function(e){
            e.preventDefault();

            const file = document.querySelector('#img-sp').files[0];

            // lấy giá trị của file và gán vào object formData
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', CLOUDINARY_PRESET_KEY);

            // call API cloudinary để đẩy ảnh lên
            const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                headers: {
                    "Content-Type": "application/form-data"
                }
            })

            // call api thêm bài viết
            add({
                title: document.querySelector('#title-sp').value,
                price: document.querySelector('#price-sp').value,
                img: data.url,
                desc: document.querySelector('#desc-sp').value,
                tinhtrang: document.querySelector('#tinhtrang-sp').value,
                baohanh: document.querySelector('#baohanh-sp').value,
                tronbo: document.querySelector('#tronbo-sp').value,
                mau: document.querySelector('#mau-sp').value,
                quantity: document.querySelector('#quantity-sp').value,
                id_danhmuc: document.querySelector('#danhmuc-sp').value
            })
            .then((result) => {
                toastr.success("Thêm thành công")
                setTimeout(function(){
                    document.location.href="/#/admin/san-pham"
                }, 1000)
            })
            .catch((error) => {
                toastr.error("Thêm thất bại")
                $('#formAddPost').reset()
            })
        })
    }
}
export default AddSanPham;