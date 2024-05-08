import { Post } from "./Post"

function App() {

  return (
    <div>
      <Post
        usuario='Bruno Gustavo'
        publicacao='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla officiis aspernatur asperiores impedit. Quibusdam accusantium facere reiciendis corrupti non vitae laudantium, corporis quasi dolor vel illo rerum esse nobis nulla?'
      />
      <Post
        usuario='Rafael Santos'
        publicacao='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur officia ipsam. Repudiandae rerum iusto, nobis vitae nostrum aspernatur hic itaque iure id. Placeat aspernatur autem consequuntur voluptates animi sunt.'
      />
      <Post
        usuario='Thiago Silva'
        publicacao='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro a autem voluptatibus? Delectus modi autem voluptatibus, earum ipsam, dolore nostrum, quidem fuga quia tempore numquam odit nisi maxime praesentium assumenda.'
      />
    </div>
  )
}

export default App
