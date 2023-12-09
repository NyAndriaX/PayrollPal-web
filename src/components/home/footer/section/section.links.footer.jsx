import React from "react";
import Facebook from "../../../../assets/icon-svg/facebook-f.svg";
import LinkedIn from "../../../../assets/icon-svg/linkedin-in.svg";
import Github from "../../../../assets/icon-svg/github.svg";

const SectionLinksFooter = () => {
	return (
		<div className="section-links">
			<div className="sc-bXCLTC">
				<p className="p-h1">Payrollpal</p>
				<ul className="content-list-row">
					<li>
						{" "}
						<img
							src={Facebook}
							alt="Links  in my compte Facebook"
							style={{ width: "10px" }}
						/>
					</li>
					<li>
						{" "}
						<img
							src={LinkedIn}
							alt="Links in my compte LinkedIn"
							style={{ width: "15px" }}
						/>
					</li>
					<li>
						{" "}
						<img
							src={Github}
							alt="Links  in my compte Github"
							style={{ width: "15px" }}
						/>
					</li>
				</ul>
			</div>
			<div className="footer-links-about">
				<label>A props</label>
				<ul className="content-list-column">
					<li>Concept</li>
					<li>Qui sommes-nous?</li>
					<li>Offres d'emploi</li>
					<li>Offres de stage</li>
					<li>Centre d'aide</li>
				</ul>
			</div>
			<div className="footer-links-meet-us">
				<label>Nous rencontrer</label>
				<ul className="content-list-column">
					<li>Human After All</li>
					<li>Presse</li>
					<li>Jobs</li>
					<li>Tarif</li>
					<li>Besoin d'aide ?</li>
					<li>Assistance entreprise</li>
				</ul>
			</div>
			<div className="sc-bXCLTC">
				<label>La newsletter qui fait le taf</label>
				<ul className="content-list-column">
					<li>
						<span className="macrographie">
							Une fois par semaine, des histoires, des jobs et des conseils dans
							votre boite mail.
						</span>
					</li>
					<li>
						<input type="text" placeholder="Email" />
						<button>Je m'abonne</button>
					</li>
					<li>
						<span className="micrographie">
							Vous pouvez vous désabonner à tout moment. On n'est pas
							susceptibles, promis.Pour en savoir plus sur notre politique de
							protection de données, cliquez-ici.
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default SectionLinksFooter;
