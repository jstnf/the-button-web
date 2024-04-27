dev:
	@next dev

docker:
	@docker build -t biscuitsbuttonweb .

run: docker
	@docker run -p 3000:3000 biscuitsbuttonweb
