function face({url}) {
  return (
      <img className="h-20 rounded-full cursor-pointer
      transition transform  hover:animate-bounce "
          loading="lazy"
          src={url}
          alt = "picture"
      />
      
    
  )
}

export default face
