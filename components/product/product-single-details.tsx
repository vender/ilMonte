import Counter from "#/components/product/counter";
// import { useRouter } from "next/router";
// import { getVariations } from "@framework/utils/get-variations";
// import usePrice from "@framework/product/use-price";
// import { generateCartItem } from "@utils/generate-cart-item";
// import ProductAttributes from "#/components/product/product-attributes";
// import isEmpty from "lodash/isEmpty";
// import { toast } from "react-toastify";
import ProductMetaReview from "#/components/product/product-meta-review";
import Link from "next/link";
import ProductGallery from "./productGallery";

interface Product {
	product: {
		product_id: number;
		name: string;
		description: string;
		formatted_price: string;
		special: number;
		formatted_special: string;
		model: string;
		categories: any[];
		tag: string;
		attributes: any;
	}
}

function productAttribs(product:any){
	const attrib = product.attributes.map((item:any)=>{
		// console.log(item);
	});

	// return product.attributes;
}

export default function ProductSingleDetails({ product }: Product) {
	// console.log(product);

	const productData = [
		{
			title: 'Описание товара',
			content: product.description
		},
		{
			title: 'Характеристики',
			content: productAttribs(product)
		}
	]

	return (
		<div className="block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-7 pb-10 lg:pb-14 2xl:pb-20 items-start">

			<ProductGallery product={product} />

			<div className="col-span-4 pt-8 lg:pt-0">
				<div className="pb-3 border-b border-gray-300">
					<h2 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-black mb-3.5">
						{product?.name}
					</h2>

					<div className="py-6">
						<ul className="text-sm space-y-5 pb-1">
							<li>
								<span className="font-semibold text-heading inline-block pe-2">
									Модель:
								</span>
								{product?.model}
							</li>
							<li>
								<span className="font-semibold text-heading inline-block pe-2">
									Категория:
								</span>
								<Link
									href={`/${product?.categories[0].category_id}`}
									className="transition hover:underline hover:text-heading"
								>
									{product?.categories[0]?.name}
								</Link>
							</li>
							{product?.tag && (
								<li className="productTags">
									<span className="font-semibold text-heading inline-block pe-2">
										Теги:
									</span>
									{product.tag.split(',').map((tag: any) => (
										<Link
											key={tag}
											href={tag}
											className="inline-block pe-1.5 transition hover:underline hover:text-heading last:pe-0"
										>
											{tag}
											<span className="text-heading">,</span>
										</Link>
									))}
								</li>
							)}
						</ul>
					</div>

					<div className="flex items-center mt-5">
						<div className="text-heading font-bold text-base md:text-xl lg:text-2xl 2xl:text-4xl pe-2 md:pe-0 lg:pe-2 2xl:pe-0">
							{product.special ? product.formatted_special : product.formatted_price}
						</div>
						{product.special && (
							<span className="line-through font-segoe text-gray-400 text-sm md:text-base lg:text-lg xl:text-xl ps-2">
								{product.formatted_price}
							</span>
						)}
					</div>
				</div>

				{/* <div className="pb-3 border-b border-gray-300">
					{Object.keys(variations).map((variation) => {
						return (
							<ProductAttributes
								key={variation}
								title={variation}
								attributes={variations[variation]}
								active={attributes[variation]}
								onClick={handleAttribute}
							/>
						);
					})}
				</div> */}

				<div className="flex items-center gap-x-4 ltr:md:pr-32 rtl:md:pl-32 ltr:lg:pr-12 rtl:lg:pl-12 ltr:2xl:pr-32 rtl:2xl:pl-32 ltr:3xl:pr-48 rtl:3xl:pl-48 py-8">
					<Counter
						item={product}
						// quantity={quantity}
						// onIncrement={() => setQuantity((prev) => prev + 1)}
						// onDecrement={() =>
						// 	setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
						// }
						// disableDecrement={quantity === 1}
					/>
					
				</div>

				{/* <p className="text-body text-sm lg:text-base leading-6 lg:leading-8">
					{product?.description}
				</p> */}

				<ProductMetaReview data={productData} />
			</div>
		</div>
	)
}