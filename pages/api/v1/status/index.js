function status(request, response) {
  response.status(200).json({ chave: "O curso .dev é massa demais!" });
}

export default status;
