import Header from "../components/Header/Header";
import styles from "./Home.module.css";
import brayanAvatar from "../assets/brayanAvatar.png";
import brayanPhoto from "../assets/brayanPhoto.jpeg";
import skillsArray from "../data/skills";
import projectsArray from "../data/projects";
import formImage from "../assets/formImage.svg";

const Home = () => {
  return (
    <>
      <section className={styles.mainContainer}>
        <Header />
        <section className={styles.banner}>
          <div className={styles.titles}>
            <div className={styles.mainTitle}>
              <h1 className={styles.hi}>Olá, meu nome é</h1>
              <h1 className={styles.brayan}>Brayan...</h1>
            </div>
            <div>
              <p className={styles.description}>
                "Front-end e UI design são minhas ferramentas <br />
                para traduzir ideias em interfaces memoráveis."
              </p>
            </div>
          </div>

          <img src={brayanAvatar} alt="" className={styles.avatar} />
        </section>
      </section>

      <section className={styles.aboutMeContainer}>
        <div className={styles.aboutMe}>
          <div className={styles.brayanPhoto}>
            <img src={brayanPhoto} alt="" className={styles.photo} />
          </div>
          <div className={styles.aboutTexts}>
            <h2 className={styles.aboutMeTitle}>SOBRE MIM</h2>
            <h2 className={styles.whoAreYou}>Quer saber quem sou?</h2>
            <p className={styles.descriptionAboutMe}>
              Meu nome é Brayan Amaral, tenho atualmente 20 anos e estou
              cursando Engenharia de Computação na UFG. Meu trabalho está focado
              principalmente em desevolvimento web front-end e UI/UX design.
              <br />
              Estudo programação há aproximadamente 2 anos, porém, não para por
              aí, estou buscando me desenvolver constantemente.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.skillsContainer}>
        <div className={styles.skills}>
          <h2 className={styles.skillsTitle}>SKILLS</h2>
          <h2 className={styles.skillsSubTitle}>Tecnologias que trabalho</h2>

          <p className={styles.skillsDescription}>
            Este é o ambiente onde minha paixão por programação ganha vida.
            Aqui, você descobrirá as tecnologias que me permitem traduzir ideias
            em funcionalidades concretas.
          </p>
          <div className={styles.skillsList}>
            {skillsArray.map((skill) => (
              <div className={styles.skillCard} key={skill.id}>
                <div className={styles.iconContainer}>{skill.icon}</div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
          <h1 className={styles.more}>...</h1>
        </div>
      </section>
      <section className={styles.projectsContainer}>
        <div className={styles.projects}>
          <h2 className={styles.projectsTitle}>PORTFÓLIO</h2>
          <h2 className={styles.projectsSubTitle}>
            Projetos que já participei
          </h2>

          <div className={styles.projectsList}>
            {projectsArray.length != 0 ? (
              projectsArray.map((project) => (
                <div className={styles.projectCard} key={project.id}>
                  <div className={styles.projectImage}></div>
                  <div className={styles.projectTexts}>
                    <h3 className={styles.projectTitle}>{project.category}</h3>
                    <h1 className={styles.projectSubTitle}>{project.name}</h1>

                    <p className={styles.projectDescription}>
                      {project.description}
                    </p>
                    <a className={styles.projectButton}>Visitar site</a>
                  </div>
                </div>
              ))
            ) : (
              <h1 className={styles.inDevelopment}>Em desevolvimento...</h1>
            )}
          </div>
        </div>
      </section>
      <section className={styles.contactContainer}>
        <div className={styles.contact}>
          <img src={formImage} alt="" className={styles.contactImage} />
          <form
            action="https://formsubmit.co/brayanamarals01@gmail.com"
            method="POST"
            className={styles.contactForm}
            target="_blank"
          >
            <h2 className={styles.contactTitle}>CONTATO</h2>
            <h2 className={styles.contactSubTitle}>Envie-me uma mensagem</h2>
            <div className={styles.forms}>
              <input
                type="text"
                placeholder="Primeiro nome"
                name="firstName"
                className={styles.input}
                required
              />
              <input
                type="text"
                placeholder="Sobrenome"
                className={styles.input}
                name="lastName"
                required
              />
              <input
                placeholder="Email"
                type="email"
                name="email"
                className={styles.input}
                required
              />
              <input
                placeholder="Número de telefone"
                className={styles.input}
                name="phone"
                required
              />
            </div>
            <textarea
              placeholder="Mensagem"
              cols="30"
              rows="10"
              name="message"
              className={styles.textArea}
            ></textarea>
            <button type="submit" className={styles.formButton}>
              Enviar
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
