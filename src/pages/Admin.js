import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { createProdus } from "../api/mutations";
import config from "../aws-exports";

const { aws_user_files_s3_bucket_region: region, aws_user_files_s3_bucket: bucket } = config;

const Admin = () => {
	const [image, setImage] = useState(null);
	const [productDetails, setProductDetails] = useState({ title: "", description: "", image: "", firma: "", price: "" });

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (!productDetails.title || !productDetails.price) return;
			await API.graphql(graphqlOperation(createProdus, { input: productDetails }));
			setProductDetails({ title: "", description: "", image: "", firma: "", price: "" });
		} catch (err) {
			console.log("error creating todo:", err);
		}
	};

	const handleImageUpload = async (e) => {
		e.preventDefault();
		const file = e.target.files[0];
		const extension = file.name.split(".")[1];
		const name = file.name.split(".")[0];
		const key = `images/${uuidv4()}${name}.${extension}`;
		const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;
		try {
			// Upload the file to s3 with public access level.
			await Storage.put(key, file, {
				level: "public",
				contentType: file.type,
			});
			// Retrieve the uploaded file to display
			const image = await Storage.get(key, { level: "public" });
			setImage(image);
			setProductDetails({ ...productDetails, image: url });
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<section className="admin-wrapper">
			<AmplifyAuthenticator>
				<section className="card">
					<header className="form-header">
						<h3>Adauga Produs Nou</h3>
						<AmplifySignOut></AmplifySignOut>
					</header>
					<form className="form-wrapper" onSubmit={handleSubmit}>
						<div className="form-image">
							{image ? (
								<img className="image-preview" src={image} alt="" />
							) : (
								<input type="file" accept="image/jpg" onChange={(e) => handleImageUpload(e)} />
							)}
						</div>
						<div className="form-fields">
							<div className="title-form">
								<label htmlFor="title">Nume Produs</label>
								<input
									type="title"
									placeholder="Completeaza numele produsului"
									onChange={(e) => setProductDetails({ ...productDetails, title: e.target.value })}
									required
								/>
							</div>
							<div className="description-form">
								<label htmlFor="description">Descriere</label>
								<textarea
									name="description"
									type="text"
									rows="8"
									placeholder="Completeaza descrierea"
									onChange={(e) => setProductDetails({ ...productDetails, description: e.target.value })}
									required
								/>
							</div>
							<div className="firma-form">
								<label htmlFor="firma">Firma</label>
								<input
									name="firma"
									type="text"
									placeholder="Completeaza numele firmei"
									onChange={(e) => setProductDetails({ ...productDetails, firma: e.target.value })}
									required
								/>
							</div>
							<div className="price-form">
								<label htmlFor="price">Pret ($)</label>
								<input
									name="price"
									type="text"
									placeholder="Care este pretul (RON)?"
									onChange={(e) => setProductDetails({ ...productDetails, price: e.target.value })}
									required
								/>
							</div>
							<div className="featured-form">
								<label>Nou?</label>
								<input
									type="checkbox"
									className="featured-checkbox"
									checked={productDetails.featured}
									onChange={() => setProductDetails({ ...productDetails, featured: !productDetails.featured })}
								/>
							</div>
							<div className="submit-form">
								<button className="btn" type="submit">
									Adauga
								</button>
							</div>
						</div>
					</form>
				</section>
			</AmplifyAuthenticator>
		</section>
	);
};

export default Admin;
