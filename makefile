dev-up:
	./vendor/bin/sail up & sleep 3 && ./vendor/bin/sail npm run watch && fg