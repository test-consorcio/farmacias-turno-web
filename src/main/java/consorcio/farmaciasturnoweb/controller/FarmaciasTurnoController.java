package consorcio.farmaciasturnoweb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FarmaciasTurnoController {

	@GetMapping
	public String raiz(Model model) {

		return "index";

	}

}
