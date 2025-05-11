const medicamentos = [
    {
      label: "Acetato de Metilprednisolona 40mg/1ml Ampolleta",
      value: "Acetato de Metilprednisolona 40mg/1ml",
      descripcion: "Antiinflamatorio esteroideo usado en procesos alérgicos y autoinmunes"
    },
    {
      label: "Acetonido de Fluocinolona 0.01% Crema 30g",
      value: "Acetonido de Fluocinolona 0.01% 30g",
      descripcion: "Corticosteroide tópico para inflamación de la piel"
    },
    {
      label: "Acetonido de Fluocinolona 0.01g/100g Crema 40g",
      value: "Acetonido de Fluocinolona 0.01g/100g 40g",
      descripcion: "Corticosteroide tópico para dermatitis y eczema"
    },
    {
      label: "Fluocinolona + Metronidazol + Nistatina Óvulos",
      value: "Fluocinolona Metronidazol Nistatina Óvulos",
      descripcion: "Tratamiento de infecciones vaginales mixtas"
    },
    {
      label: "Aciclovir 200mg 25 Comprimidos",
      value: "Aciclovir 200mg",
      descripcion: "Antiviral para herpes simple y varicela"
    },
    {
      label: "Aciclovir 400mg 35 Comprimidos",
      value: "Aciclovir 400mg",
      descripcion: "Antiviral para infecciones por herpes"
    },
    {
      label: "Aciclovir 5% Crema 5g",
      value: "Aciclovir 5% 5g",
      descripcion: "Antiviral tópico para herpes labial"
    },
    {
      label: "Aciclovir 200mg/5ml Suspensión 125ml",
      value: "Aciclovir 200mg/5ml",
      descripcion: "Antiviral en jarabe para niños con varicela"
    },
    {
      label: "Ácido Acetilsalicílico 100mg 30 Tabs",
      value: "Ácido Acetilsalicílico 100mg",
      descripcion: "Antiplaquetario para prevención cardiovascular"
    },
    {
      label: "Ácido Acetilsalicílico 500mg 20 Tabs",
      value: "Ácido Acetilsalicílico 500mg",
      descripcion: "Analgésico, antipirético y antiinflamatorio"
    },
    {
      label: "Ácido Ascórbico con Rosa Canina 500/100mg",
      value: "Vitamina C 500/100mg",
      descripcion: "Suplemento vitamínico para reforzar el sistema inmune"
    },
    {
      label: "Amoxicilina + Ácido Clavulánico 875/125mg",
      value: "Amoxicilina Clavulánico 875/125mg",
      descripcion: "Antibiótico de amplio espectro para infecciones bacterianas"
    },
    {
      label: "Ácido Fólico 5mg 20 Tabs",
      value: "Ácido Fólico 5mg",
      descripcion: "Suplemento para embarazo y anemia megaloblástica"
    },
    {
      label: "Ácido Nalidíxico + Fenazopiridina 500/50mg",
      value: "Nalidíxico Fenazopiridina 500/50mg",
      descripcion: "Antibiótico urinario y analgésico vesical"
    },
    {
      label: "Agua Oxigenada 120ml",
      value: "Agua Oxigenada",
      descripcion: "Antiséptico para heridas"
    },
    {
      label: "Albendazol 2g/100ml Suspensión",
      value: "Albendazol 2g/100ml",
      descripcion: "Antiparasitario de amplio espectro"
    },
    {
      label: "Alcohol Etílico 180ml",
      value: "Alcohol Etílico",
      descripcion: "Desinfectante de uso externo"
    },
    {
      label: "Alestona + Estradiol 10/1ml Ampolleta",
      value: "Alestona Estradiol",
      descripcion: "Tratamiento hormonal y antiinflamatorio"
    },
    {
      label: "Alopurinol 300mg 30 Tabs",
      value: "Alopurinol 300mg",
      descripcion: "Tratamiento para la gota e hiperuricemia"
    },
    {
      label: "Amantadina + Clorfenamina + Paracetamol 0.02g/3g/100ml",
      value: "Amantadina Clorfenamina Paracetamol 60ml",
      descripcion: "Antigripal compuesto para síntomas de resfriado"
    },
    {
      label: "Amantadina + Clorfenamina + Paracetamol 3/300mg 15 Tabs",
      value: "Amantadina Clorfenamina Paracetamol Tabs",
      descripcion: "Antigripal compuesto en tabletas"
    },
    {
      label: "Ambroxol 30mg 20 Comprimidos",
      value: "Ambroxol 30mg",
      descripcion: "Mucolítico para tos con flemas"
    },

    {
        label: "Ambroxol 30mg Tabletas",
        value: "Ambroxol 30mg",
        descripcion: "Mucolítico para tos productiva"
      },
      {
        label: "Ambroxol 300mg/100ml Solución",
        value: "Ambroxol 300mg/100ml",
        descripcion: "Jarabe mucolítico para adultos"
      },
      {
        label: "Ambroxol 7.5mg/1ml Solución",
        value: "Ambroxol 7.5mg/1ml",
        descripcion: "Solución oral pediátrica para tos"
      },
      {
        label: "Ambroxol 750mg/100ml Jarabe",
        value: "Ambroxol 750mg/100ml",
        descripcion: "Jarabe concentrado para flemas"
      },
      {
        label: "Ambroxol + Clenbuterol 0.01mg/100ml",
        value: "Ambroxol + Clenbuterol",
        descripcion: "Descongestionante bronquial combinado"
      },
      {
        label: "Ambroxol + Levodropropizina 600mg/100ml",
        value: "Ambroxol + Levodropropizina",
        descripcion: "Tratamiento para tos con flemas"
      },
      {
        label: "Ambroxol + Loratadina 100mg/100ml",
        value: "Ambroxol + Loratadina",
        descripcion: "Combinación antialérgica y mucolítica"
      },
      {
        label: "Amikacina 100mg/2ml Ampolleta",
        value: "Amikacina 100mg/2ml",
        descripcion: "Antibiótico inyectable de amplio espectro"
      },
      {
        label: "Amikacina 500mg/2ml Ampolleta",
        value: "Amikacina 500mg/2ml",
        descripcion: "Antibiótico potente vía IM/IV"
      },
      {
        label: "Amlodipino 5mg Tabletas",
        value: "Amlodipino 5mg",
        descripcion: "Antihipertensivo bloqueador de canales de calcio"
      },
      {
        label: "Amoxicilina 500mg Cápsulas",
        value: "Amoxicilina 500mg",
        descripcion: "Antibiótico penicilínico para infecciones"
      },
      {
        label: "Amoxicilina 250mg/5ml Suspensión",
        value: "Amoxicilina 250mg/5ml",
        descripcion: "Antibiótico pediátrico en suspensión oral"
      },
      {
        label: "Amoxicilina/Clavulánico 28.5mg/5ml Suspensión",
        value: "Amoxicilina/Clavulánico 28.5mg/5ml",
        descripcion: "Antibiótico con clavulanato para infecciones resistentes"
      },
      {
        label: "Amoxicilina/Clavulánico 31.25mg/5ml Suspensión",
        value: "Amoxicilina/Clavulánico 31.25mg/5ml",
        descripcion: "Antibiótico oral infantil"
      },
      {
        label: "Amoxicilina/Clavulánico 42.9mg/5ml Suspensión",
        value: "Amoxicilina/Clavulánico 42.9mg/5ml",
        descripcion: "Antibiótico oral pediátrico"
      },
      {
        label: "Amoxicilina/Clavulánico 500/125mg Tabletas",
        value: "Amoxicilina/Clavulánico 500/125mg",
        descripcion: "Antibiótico combinado para adultos"
      },
      {
        label: "Amoxicilina/Clavulánico 57mg/5ml Suspensión",
        value: "Amoxicilina/Clavulánico 57mg/5ml",
        descripcion: "Suspensión oral antibiótica"
      },
      {
        label: "Amoxicilina/Clavulánico 62.5mg/5ml Suspensión",
        value: "Amoxicilina/Clavulánico 62.5mg/5ml",
        descripcion: "Suspensión infantil de amplio espectro"
      },
      {
        label: "Ampicilina 500mg Cápsulas",
        value: "Ampicilina 500mg",
        descripcion: "Antibiótico penicilínico para infecciones comunes"
      },
      {
        label: "Ampicilina 250mg/5ml Suspensión",
        value: "Ampicilina 250mg/5ml",
        descripcion: "Antibiótico oral para niños"
      },
      {
        label: "Ampicilina/Metamizol/Guaifenesina/Lidocaína/Clorfenamina (Fórmula 1)",
        value: "Ampicilina compuesta 1",
        descripcion: "Combinación inyectable para infecciones con dolor y congestión"
      },
      {
        label: "Ampicilina/Metamizol/Guaifenesina/Lidocaína/Clorfenamina (Fórmula 2)",
        value: "Ampicilina compuesta 2",
        descripcion: "Antibiótico y analgésico inyectable combinado"
      },
      {
        label: "Angenovag Solución 20ml",
        value: "Angenovag",
        descripcion: "Solución antiséptica y vaginal"
      },
      {
        label: "Atorvastatina 10mg Tabletas",
        value: "Atorvastatina 10mg",
        descripcion: "Reductor del colesterol (estatinas)"
      },
      {
        label: "Atorvastatina 20mg Tabletas",
        value: "Atorvastatina 20mg",
        descripcion: "Tratamiento para dislipidemias"
      },
  
        {
          label: "Azitromicina 500mg Tabletas",
          value: "Azitromicina 500mg",
          descripcion: "Antibiótico macrólido para infecciones respiratorias"
        },
        {
          label: "Azitromicina 4g/100ml Suspensión",
          value: "Azitromicina 4g/100ml",
          descripcion: "Antibiótico oral para infecciones bacterianas"
        },
        {
          label: "Baño Coloide 96.5-2.5g/100g",
          value: "Baño Coloide",
          descripcion: "Alivio de irritación y prurito en la piel"
        },
        {
          label: "Beclometasona 50mcg Aerosol",
          value: "Beclometasona 50mcg",
          descripcion: "Corticosteroide inhalado para asma o rinitis"
        },
        {
          label: "Bencidamina 0.15g/100ml Solución",
          value: "Bencidamina 0.15g/100ml",
          descripcion: "Antiinflamatorio oral para dolor de garganta"
        },
        {
          label: "Bencidamina 45mg/30ml Solución",
          value: "Bencidamina 45mg/30ml",
          descripcion: "Enjuague bucal antiinflamatorio"
        },
        {
          label: "Bencidamina 550mg/360ml Solución",
          value: "Bencidamina 550mg/360ml",
          descripcion: "Enjuague bucal de uso prolongado"
        },
        {
          label: "Benzonatato 100mg Cápsulas",
          value: "Benzonatato 100mg",
          descripcion: "Antitusivo para la tos seca"
        },
        {
          label: "Betametasona 8mg/2ml Inyectable",
          value: "Betametasona 8mg/2ml",
          descripcion: "Antiinflamatorio corticosteroide IM o IV"
        },
        {
          label: "Betametasona + Clotrimazol + Gentamicina",
          value: "Betametasona combinada",
          descripcion: "Crema para infecciones cutáneas fúngicas y bacterianas"
        },
        {
          label: "Bezafibrato 200mg Tabletas",
          value: "Bezafibrato 200mg",
          descripcion: "Regulador de lípidos en sangre (triglicéridos)"
        },
        {
          label: "Bromuro de Pinaverio 100mg Tabletas",
          value: "Bromuro de Pinaverio 100mg",
          descripcion: "Antiespasmódico digestivo para colon irritable"
        },
        {
          label: "Butilhioscina 10mg Tabletas",
          value: "Butilhioscina 10mg",
          descripcion: "Alivio de espasmos gastrointestinales"
        },
        {
          label: "Butilhioscina 20mg/1ml Ampolleta",
          value: "Butilhioscina 20mg/1ml",
          descripcion: "Antiespasmódico inyectable IM o IV"
        },
        {
          label: "Butilhioscina + Metamizol Inyectable",
          value: "Butil + Metamizol",
          descripcion: "Combinación analgésica y antiespasmódica"
        },
        {
          label: "Butilhioscina + Lisina Inyectable",
          value: "Butil + Lisina",
          descripcion: "Ampolleta combinada para dolor abdominal agudo"
        },
        {
          label: "Butilhioscina + Paracetamol Tabletas",
          value: "Butil + Paracetamol",
          descripcion: "Tratamiento oral para espasmos y fiebre"
        },
        {
          label: "Calamina Crema 180ml",
          value: "Calamina",
          descripcion: "Loción calmante para picaduras y quemaduras leves"
        },
        {
          label: "Calcio + Omega 3 (2.2g)",
          value: "Calcio Omega 3",
          descripcion: "Suplemento para fortalecer huesos y sistema cardiovascular"
        },
        {
          label: "Captopril 25mg Tabletas",
          value: "Captopril 25mg",
          descripcion: "Antihipertensivo inhibidor de la ECA"
        },
        {
          label: "Carbamazepina 200mg Tabletas",
          value: "Carbamazepina 200mg",
          descripcion: "Antiepiléptico y estabilizador del estado de ánimo"
        },
        {
          label: "Cefaclor 250mg/5ml Suspensión",
          value: "Cefaclor 250mg/5ml",
          descripcion: "Antibiótico cefalosporínico de segunda generación"
        },
        {
          label: "Cefalexina 500mg Cápsulas",
          value: "Cefalexina 500mg",
          descripcion: "Antibiótico de amplio espectro en cápsulas"
        },
        {
          label: "Cefalexina 250mg/5ml Suspensión",
          value: "Cefalexina 250mg/5ml",
          descripcion: "Antibiótico pediátrico oral"
        },      
        { label: "Cefalexina 250mg/5ml Suspensión", value: "Cefalexina 250mg/5ml", descripcion: "Antibiótico oral de amplio espectro" },
        { label: "Cefixima 400mg Cápsulas", value: "Cefixima 400mg", descripcion: "Antibiótico para infecciones respiratorias y urinarias" },
        { label: "Cefixima 100mg/5ml Suspensión", value: "Cefixima 100mg/5ml", descripcion: "Antibiótico pediátrico en jarabe" },
        { label: "Ceftriaxona 1g Inyectable", value: "Ceftriaxona 1g", descripcion: "Antibiótico inyectable de amplio espectro" },
        { label: "Ceftriaxona 500mg Inyectable", value: "Ceftriaxona 500mg", descripcion: "Dosis intermedia de antibiótico parenteral" },
        { label: "Cefuroxima 500mg Tabletas", value: "Cefuroxima 500mg", descripcion: "Antibiótico oral para infecciones respiratorias" },
        { label: "Celecoxib 200mg Cápsulas", value: "Celecoxib 200mg", descripcion: "Antiinflamatorio para dolor y artritis" },
        { label: "Cetirizina 10mg Tabletas", value: "Cetirizina 10mg", descripcion: "Antihistamínico para alergias" },
        { label: "Cetirizina 75mg Tabletas", value: "Cetirizina 75mg", descripcion: "Antialérgico en presentación prolongada" },
        { label: "Cetirizina 100mg/100ml Suspensión", value: "Cetirizina 100mg/100ml", descripcion: "Jarabe pediátrico para alergias" },
        { label: "Ciprofloxacino 500mg Tabletas", value: "Ciprofloxacino 500mg", descripcion: "Antibiótico para infecciones urinarias y gastrointestinales" },
        { label: "Ciprofloxacino + Dexametazona Gotas Oftálmicas", value: "Ciprofloxacino + Dexametazona", descripcion: "Tratamiento ocular para conjuntivitis o blefaritis" },
        { label: "Ciprofloxacino + Hidrocortisona + Lidocaína Gotas óticas", value: "Ciprofloxacino Otico", descripcion: "Tratamiento de otitis con inflamación y dolor" },
        { label: "Cisaprida 10mg Tabletas", value: "Cisaprida 10mg", descripcion: "Estimulante gastrointestinal" },
        { label: "Cisaprida 5mg Tabletas", value: "Cisaprida 5mg", descripcion: "Procinético para reflujo o gastroparesia" },
        { label: "Cisaprida 1mg/ml Solución", value: "Cisaprida 1mg/ml", descripcion: "Dosis pediátrica para reflujo gástrico" },
        { label: "Claritromicina 250mg Tabletas", value: "Claritromicina 250mg", descripcion: "Antibiótico para infecciones respiratorias y de piel" },
        { label: "Claritromicina 500mg Tabletas", value: "Claritromicina 500mg", descripcion: "Dosis fuerte para infecciones bacterianas resistentes" },
        { label: "Claritromicina 250mg/5ml Suspensión", value: "Claritromicina 250mg/5ml", descripcion: "Antibiótico pediátrico en jarabe" },
        { label: "Clindamicina 300mg Cápsulas", value: "Clindamicina 300mg", descripcion: "Antibiótico para infecciones graves de piel y hueso" },
        { label: "Clindamicina 1g Ungüento", value: "Clindamicina 1g", descripcion: "Tópico para acné o infecciones dérmicas" },
        { label: "Clindamicina 600mg Inyectable", value: "Clindamicina 600mg", descripcion: "Antibiótico IM o IV para infecciones graves" },
        { label: "Clindamicina + Ketoconazol 100/400mg", value: "Clindamicina + Ketoconazol", descripcion: "Tratamiento vaginal para infecciones por hongos" },
        { label: "Clonixinato de Lisina 250mg", value: "Clonixinato de Lisina", descripcion: "Analgésico para dolor agudo moderado" },
        { label: "Clonixinato + Hioscina 250/10mg", value: "Clonixinato + Hioscina", descripcion: "Alivia cólicos abdominales con dolor" },
        { label: "Cloquinol 3%", value: "Cloquinol 3%", descripcion: "Tópico antimicótico para piel" },
        { label: "Cloranfenicol 5mg/g Ungüento", value: "Cloranfenicol", descripcion: "Antibiótico tópico para infecciones cutáneas" },
        { label: "Clorfenamina 4mg Tabletas", value: "Clorfenamina", descripcion: "Antihistamínico para alergias y estornudos" },
        { label: "Clorfenamina Compuesta (Paracetamol, Cafeína, etc)", value: "Clorfenamina Compuesta", descripcion: "Antigripal para síntomas respiratorios" },
        { label: "Tramadol 50mg Tabletas", value: "Tramadol", descripcion: "Analgésico opiáceo para dolor moderado a severo" },
        { label: "Cloruro de Sodio 6.5mg/ml", value: "Cloruro de Sodio", descripcion: "Solución para irrigación o nebulización" },
        { label: "Cloruro de Benzalconio", value: "Cloruro de Benzalconio", descripcion: "Antiséptico para piel o superficies" },
        { label: "Cetilpiridinio + Benzocaína", value: "Cetilpiridinio + Benzocaína", descripcion: "Pastillas para dolor e irritación de garganta" },
        { label: "Cetilpiridinio 1.45mg", value: "Cetilpiridinio", descripcion: "Antiséptico bucal en tabletas" },
        { label: "Clotrimazol 2% Crema", value: "Clotrimazol Crema", descripcion: "Antimicótico tópico para infecciones por hongos" },
        { label: "Clotrimazol 1g/100g", value: "Clotrimazol 1%", descripcion: "Tratamiento externo de candidiasis y tiña" },
        { label: "Clotrimazol Dual", value: "Clotrimazol Dual", descripcion: "Terapia combinada para infecciones vaginales" },
        { label: "Coenzima Q10 + Vitaminas", value: "Coenzima Q10", descripcion: "Suplemento antioxidante y revitalizante" },
        { label: "Coenzima Q10 con aceites esenciales", value: "Coenzima Q10 Completa", descripcion: "Multivitamínico para salud celular y hormonal" },
        { label: "Colágeno Tipo 2", value: "Colágeno Tipo 2", descripcion: "Soporte articular y cartílago" },
        { label: "Colchicina 1mg", value: "Colchicina", descripcion: "Tratamiento para ataques agudos de gota" },
        { label: "Complejo B + Diclofenaco", value: "Complejo B + Diclofenaco", descripcion: "Antiinflamatorio para dolores musculares y neuropáticos" },
        { label: "Complejo B + Dexametasona + Lidocaína", value: "Complejo B Compuesto", descripcion: "Terapia inyectable para dolor severo" },
        { label: "Damina, Azahar, Lechuga, etc. 500mg", value: "Damina Compuesta", descripcion: "Relajante natural para ansiedad y sueño" },
        { label: "Desloratadina 5mg", value: "Desloratadina", descripcion: "Antihistamínico de larga duración para alergias" },              
        { label: "Desloratadina 5mg Tabletas", value: "Desloratadina", descripcion: "Antihistamínico para tratar alergias" },
        { label: "Desloratadina 250mg/100ml Jarabe", value: "Desloratadina Jarabe 250", descripcion: "Alivio de síntomas alérgicos en niños y adultos" },
        { label: "Desloratadina 50mg/100ml Jarabe", value: "Desloratadina Jarabe 50", descripcion: "Antialérgico en solución oral" },
        { label: "Dexametasona 8mg/2ml Inyectable", value: "Dexametasona Inyectable", descripcion: "Antiinflamatorio y antialérgico potente" },
        { label: "Dexametasona + Neomicina Gotas", value: "Dexametasona + Neomicina", descripcion: "Tratamiento para infecciones oculares con inflamación" },
        { label: "Dexpanthenol 5% Crema", value: "Dexpanthenol", descripcion: "Regenerador dérmico para irritaciones o heridas" },
        { label: "Dextrometorfano + Ambroxol 225mg/100ml", value: "Dextrometorfano + Ambroxol", descripcion: "Jarabe para tos y mucolítico" },
        { label: "Dextrometorfano + Guaifenesina 1g/100ml", value: "Dextrometorfano + Guaifenesina 1g", descripcion: "Expectorante y antitusivo para tos productiva" },
        { label: "Dextrometorfano + Guaifenesina 2g/100ml", value: "Dextrometorfano + Guaifenesina 2g", descripcion: "Jarabe combinado para tos intensa" },
        { label: "Dextrometorfano, Guaifenesina Gotero", value: "Dextrometorfano Gotas", descripcion: "Antitusivo pediátrico en gotas" },
        { label: "Diclofenaco 1.235% Crema", value: "Diclofenaco Crema", descripcion: "Antiinflamatorio tópico para dolores musculares" },
        { label: "Diclofenaco 100mg Tabletas", value: "Diclofenaco", descripcion: "Antiinflamatorio no esteroideo (AINE) para dolor moderado" },
        { label: "Diclofenaco 1.5g/100ml Solución", value: "Diclofenaco Oral", descripcion: "Solución para tratamiento antiinflamatorio oral" },
        { label: "Diclofenaco Gotas Oftálmicas", value: "Diclofenaco Gotas", descripcion: "Alivio de inflamación ocular" },     
        { label: "Diclofenaco 75mg/3ml Ampolleta", value: "Diclofenaco Inyectable", descripcion: "Antiinflamatorio inyectable de acción rápida" },
        { label: "Diclofenaco Ácido Libre 0.18%", value: "Diclofenaco Ácido Libre", descripcion: "Presentación alternativa de diclofenaco oral" },
        { label: "Diclofenaco + Vitaminas B", value: "Diclofenaco + B", descripcion: "Antiinflamatorio con complejo B para dolores musculares" },
        { label: "Dicloxacilina 500mg Cápsulas", value: "Dicloxacilina 500mg", descripcion: "Antibiótico para infecciones por bacterias grampositivas" },
        { label: "Dicloxacilina 250mg/5ml Suspensión", value: "Dicloxacilina Suspensión", descripcion: "Antibiótico oral pediátrico" },
        { label: "Difenidol 25mg Tabletas", value: "Difenidol", descripcion: "Tratamiento de náuseas, vómito y vértigo" },
        { label: "Difenidol 40mg/2ml Ampolleta", value: "Difenidol Inyectable", descripcion: "Presentación inyectable para náusea severa" },
        { label: "Dimenhidrinato 50mg Tabletas", value: "Dimenhidrinato", descripcion: "Antiemético para mareo por movimiento" },
        { label: "Dimenhidrinato 25mg/ml Solución", value: "Dimenhidrinato Solución", descripcion: "Versión líquida para náusea en niños" },
        { label: "Dimeticona 100mg/100ml", value: "Dimeticona", descripcion: "Antiflatulento para cólicos y distensión abdominal" },
        { label: "Diosmina + Hesperidina 450mg/50mg", value: "Diosmina + Hesperidina", descripcion: "Tratamiento de insuficiencia venosa y hemorroides" },
        { label: "Betametasona Dipropionato + Fosfato sódico 2mg/1ml", value: "Betametasona Combinada", descripcion: "Antiinflamatorio inyectable de acción rápida" },
        { label: "Doxiciclina 100mg Cápsulas", value: "Doxiciclina", descripcion: "Antibiótico para infecciones respiratorias y urinarias" },
        { label: "Dropropizina 300mg/100ml", value: "Dropropizina", descripcion: "Antitusivo de acción periférica" },
        { label: "Eritromicina 500mg Tabletas", value: "Eritromicina", descripcion: "Antibiótico para infecciones bacterianas" },
        { label: "Eritromicina 125mg/5ml Suspensión", value: "Eritromicina Suspensión 125", descripcion: "Antibiótico en presentación pediátrica" },
        { label: "Eritromicina 250mg/5ml Suspensión", value: "Eritromicina Suspensión 250", descripcion: "Antibiótico para uso oral" },
        { label: "Extracto de Black Cohosh 185mg", value: "Black Cohosh", descripcion: "Tratamiento de síntomas menopáusicos" },
        { label: "Fenazopiridina 100mg", value: "Fenazopiridina", descripcion: "Alivio del dolor urinario e irritación" },
        { label: "Fenilefrina + Loratadina 200mg/100ml", value: "Fenilefrina + Loratadina 200", descripcion: "Descongestionante y antihistamínico oral" },
        { label: "Fenilefrina + Loratadina 100mg/100ml", value: "Fenilefrina + Loratadina 100", descripcion: "Jarabe para síntomas de resfriado" },
        { label: "Fenilefrina + Loratadina 30mg/5mg Tabletas", value: "Fenilefrina + Loratadina Tabs", descripcion: "Antihistamínico con descongestionante" },
        { label: "Fexofenadina 120mg Tabletas", value: "Fexofenadina 120", descripcion: "Antihistamínico para rinitis alérgica" },
        { label: "Fexofenadina 180mg Tabletas", value: "Fexofenadina 180", descripcion: "Antialérgico de larga duración" },
        { label: "Fluconazol 150mg Cápsula", value: "Fluconazol", descripcion: "Antifúngico oral para candidiasis" },
        { label: "Fluoxetina 20mg Tabletas", value: "Fluoxetina", descripcion: "Antidepresivo inhibidor de la recaptación de serotonina" },
        { label: "Fluocinolona + Clioquinol 0.01% Crema", value: "Fluocinolona + Clioquinol", descripcion: "Antiinflamatorio y antimicótico tópico" },
        { label: "Fluocinolona + Neomicina 0.01% Crema", value: "Fluocinolona + Neomicina", descripcion: "Tratamiento de infecciones cutáneas inflamadas" },
        { label: "Fumarato Ferroso 200mg Tabletas", value: "Fumarato Ferroso", descripcion: "Suplemento de hierro para anemia" },
        { label: "Fumarato Ferroso + Ácido Fólico 350mg/1mg", value: "Hierro + Ácido Fólico", descripcion: "Prevención de anemia durante embarazo" },
        { label: "Furosemida 40mg Tabletas", value: "Furosemida", descripcion: "Diurético para hipertensión o retención de líquidos" },
        { label: "Gabapentina 300mg Cápsulas", value: "Gabapentina", descripcion: "Anticonvulsivo para neuropatías o dolor crónico" },
        { label: "Gentamicina 160mg/2ml Ampolleta", value: "Gentamicina", descripcion: "Antibiótico inyectable de amplio espectro" },
        { label: "Gentamicina 160mg/2ml Ampolletas x5", value: "Gentamicina x5", descripcion: "Antibiótico inyectable para tratamiento prolongado" },
        { label: "Gibra (combinado con vitaminas y lactobacilos)", value: "Gibra Compuesto", descripcion: "Suplemento inmunológico y digestivo" },
        { label: "Glibenclamida 5mg Tabletas", value: "Glibenclamida", descripcion: "Hipoglucemiante oral para diabetes tipo 2" },
        { label: "Glicerol 10 Supositorios", value: "Glicerol", descripcion: "Laxante rectal para aliviar el estreñimiento ocasional." },
        { label: "Glucosamida, Condroitina, Ácido Ascórbico 30 Comprimidos", value: "Glucosamida", descripcion: "Complemento para mejorar la salud articular y cartilaginosa." },
        { label: "Glucosamida, Condroitina, Ácido Ascórbico 90 Comprimidos", value: "Glucosamida", descripcion: "Suplemento para articulaciones, usado en osteoartritis." },
        { label: "Glucosamina, Condroitina, Ácido Ascórbico 200/25mg 30 Comprimidos", value: "Glucosamina", descripcion: "Tratamiento coadyuvante para desgaste articular y dolor." },
        { label: "Guaifenesina, Oxalamina 1g/100ml 140ml Jarabe", value: "Guaifenesina", descripcion: "Expectorante y antitusivo para aliviar la tos productiva." },
        { label: "Hierro Dextrán 100mg/2ml 3 Ampolletas", value: "Hierro Dextrán", descripcion: "Suplemento inyectable para el tratamiento de anemia por deficiencia de hierro." },
        { label: "Furosemida 40mg 20 Tabletas", value: "Furosemida", descripcion: "Diurético de asa usado en edemas e hipertensión." },
        { label: "Hidrocortisona 1% Crema 60g", value: "Hidrocortisona", descripcion: "Corticoide tópico para inflamación, alergias y dermatitis." },
        { label: "Hidrocortisona, Cloranfenicol, Benzocaína 2.5g/2g/100ml Gotas Óticas 5ml", value: "Hidrocortisona", descripcion: "Gotas para inflamación, infección y dolor en oído externo." },
        { label: "Hidrocortisona, Cloranfenicol, Benzocaína 25/20/1ml Gotas Oftálmicas 10ml", value: "Hidrocortisona", descripcion: "Gotas oftálmicas con antibiótico, anestésico y corticoide para conjuntivitis oculares." },
        { label: "Hidróxido de Al, Mg, Dimeticona 4g/0.5g/100ml Suspensión 360ml", value: "Hidróxido de Al", descripcion: "Antiácido y antiflatulento para acidez, reflujo y gases." },
        { label: "Hidroxocobalamina, Tiamina, Piridoxina 100mg", value: "Hidroxocobalamina", descripcion: "Complejo vitamínico B para deficiencias, neuropatías o fatiga." },
        { label: "Hierro con Vitaminas Solución 110ml", value: "Hierro", descripcion: "Suplemento oral para prevenir o tratar anemia ferropénica." },
        { label: "Hierro, Ácido Fólico 800mg 30 Tabletas", value: "Hierro", descripcion: "Tratamiento para anemia, comúnmente usado en embarazo." },
        { label: "Hioscina 20mg/1ml 3 Ampolletas", value: "Hioscina", descripcion: "Antiespasmódico inyectable para cólicos gastrointestinales o urinarios." },
        { label: "Hioscina, Ibuprofeno 20mg/400mg 10 Tabletas", value: "Hioscina", descripcion: "Combinación para cólicos con dolor e inflamación." },
        { label: "Hioscina, Paracetamol 10mg/500mg 20 Tabletas", value: "Hioscina", descripcion: "Analgésico antiespasmódico para dolor abdominal o menstrual." },
        { label: "Hipromelosa 0.5% Gotas Oftálmicas 10ml", value: "Hipromelosa", descripcion: "Lubricante ocular para ojos secos e irritados." },
        { label: "Hioscina, Paracetamol 100mg/1ml 20ml Solución", value: "Hioscina", descripcion: "Solución oral para cólicos y fiebre en niños o adultos." },
        { label: "Ibuprofeno 200mg 10 Cápsulas", value: "Ibuprofeno", descripcion: "Antiinflamatorio y analgésico para dolor leve a moderado." },
        { label: "Ibuprofeno 400mg 10 Tabletas", value: "Ibuprofeno", descripcion: "Analgésico y antipirético para fiebre o inflamación." },
        { label: "Ibuprofeno 600mg 10 Tabletas", value: "Ibuprofeno", descripcion: "Dosis media para dolor agudo o inflamatorio moderado." },
        { label: "Ibuprofeno 800mg 10 Tabletas", value: "Ibuprofeno", descripcion: "Dosis alta para procesos inflamatorios severos." },
        { label: "Ibuprofeno 2g/100ml Suspensión 120ml", value: "Ibuprofeno", descripcion: "Suspensión oral para fiebre y dolor en niños." },
        { label: "Ibuprofeno 200mg Cápsulas", value: "Ibuprofeno", descripcion: "Versión en cápsula de antiinflamatorio para uso general." },
        { label: "Ibuprofeno 400mg Cápsulas", value: "Ibuprofeno", descripcion: "Antiinflamatorio no esteroideo para dolor, fiebre e inflamación." },
        { label: "Indometacina 25mg 30 Cápsulas", value: "Indometacina", descripcion: "Antiinflamatorio no esteroideo para artritis y dolor agudo." },
        { label: "Itraconazol 100mg 15 Cápsulas", value: "Itraconazol", descripcion: "Antifúngico para infecciones por hongos sistémicas o dérmicas." },
        { label: "Ivermectina 6mg 4 Tabletas", value: "Ivermectina", descripcion: "Antiparasitario para infecciones como sarna y pediculosis." },
        { label: "Ketokonazol 200mg 10 Tabletas", value: "Ketokonazol", descripcion: "Antifúngico oral para infecciones por hongos resistentes." },
        { label: "Ketokonazol 2g/100g Crema 30g", value: "Ketokonazol", descripcion: "Antifúngico tópico para tiña, candidiasis o dermatitis seborreica." },
        { label: "Ketoprofeno 150mg Cápsulas", value: "Ketoprofeno", descripcion: "Antiinflamatorio no esteroideo para dolor músculo-esquelético." },
        { label: "Ketoprofeno, Paracetamol 100mg/300mg 12 Tabletas", value: "Ketoprofeno", descripcion: "Analgésico y antiinflamatorio combinado para dolor moderado." },
        { label: "Ketorolaco 30mg 6 Tabletas", value: "Ketorolaco", descripcion: "Analgésico potente para dolor agudo de corta duración." },
        { label: "Ketorolaco 10mg 10 Tabletas", value: "Ketorolaco", descripcion: "Analgésico antiinflamatorio para dolor leve a moderado." },
        { label: "Ketorolaco 30mg/1ml 3 Ampolletas", value: "Ketorolaco", descripcion: "Analgésico inyectable para manejo de dolor agudo severo." },
        { label: "Ketorolaco, Tramadol 10mg/25mg 10 Cápsulas", value: "Ketorolaco", descripcion: "Combinación analgésica para dolor moderado a intenso." },
        { label: "Ketorolaco, Tramadol 10mg/25mg 10 Cápsulas", value: "Ketorolaco", descripcion: "Combinación analgésica para dolor moderado a intenso." },
        { label: "Ketorolaco, Tramadol 25mg/1ml 3 Ampolletas", value: "Ketorolaco", descripcion: "Combinación inyectable para dolor postoperatorio o severo." },
        { label: "Lactobacillus 430mg 20 Cápsulas", value: "Lactobacillus", descripcion: "Probiótico para equilibrar la flora intestinal." },
        { label: "Lactobacilos, Avena 573mg 30 Tabletas Masticables", value: "Lactobacilos", descripcion: "Probiótico con fibras para salud digestiva." },
        { label: "Lactobacilos, Avena, Arándanos 536mg 20 Tabletas", value: "Lactobacilos", descripcion: "Probiótico con antioxidantes y fibras para sistema digestivo." },
        { label: "Lactulosa 66.66g/100ml 125ml Jarabe", value: "Lactulosa", descripcion: "Laxante osmótico para estreñimiento crónico." },
        { label: "Leche de Magnesia 8.5g/100ml 180ml Suspensión", value: "Leche de Magnesia", descripcion: "Antiácido y laxante suave para digestión y estreñimiento." },
        { label: "Levofloxacino 500mg 7 Tabletas", value: "Levofloxacino", descripcion: "Antibiótico de amplio espectro para infecciones bacterianas." },
        { label: "Levofloxacino 500mg 7 Tabletas", value: "Levofloxacino", descripcion: "Antibiótico de amplio espectro para infecciones respiratorias y urinarias." },
        { label: "Levonorgestrel 1.5mg 1 Tableta", value: "Levonorgestrel", descripcion: "Anticonceptivo de emergencia postcoital." },
        { label: "Levonorgestrel, Etinilestradiol 0.15mg/0.03mg 21 Tabletas", value: "Levonorgestrel", descripcion: "Anticonceptivo hormonal combinado diario." },
        { label: "Levotiroxina 100mcg 100 Tabletas", value: "Levotiroxina", descripcion: "Hormona tiroidea para hipotiroidismo." },
        { label: "Lidocaína 5% Crema 35g", value: "Lidocaína", descripcion: "Anestésico local para aliviar dolor o picazón tópica." },
        { label: "Lidocaína, Hidrocortisona, Óxido de Zinc, Subacetato de Aluminio 2.5/180mg, 35mg 30g Crema", value: "Lidocaína", descripcion: "Combinación tópica para aliviar inflamación, picazón e irritación cutánea." },
        { label: "Lidocaína, Meclizina, Piridoxina 20/25/50/1ml 5 Ampolletas", value: "Lidocaína", descripcion: "Solución inyectable para náuseas, vómito y vértigo con efecto anestésico local." },
        { label: "Lidocaína, Neomicina 0.350g/100ml Gotas Óticas 20ml", value: "Lidocaína", descripcion: "Gotas para infecciones del oído con dolor e inflamación." },
        { label: "Lincomicina 300mg/1ml 1 Ampolleta", value: "Lincomicina", descripcion: "Antibiótico inyectable para infecciones bacterianas graves." },
        { label: "Lincomicina 300mg/1ml 6 Ampolletas", value: "Lincomicina", descripcion: "Antibiótico de uso parenteral en infecciones resistentes." },
        { label: "Lincomicina 600mg/2ml 6 Ampolletas", value: "Lincomicina", descripcion: "Dosis alta de antibiótico para infecciones severas o sistémicas." },
        { label: "Loperamida 2mg 12 Tabletas", value: "Loperamida", descripcion: "Antidiarreico para control de diarrea aguda o crónica." },
        { label: "Loratadina 100mg/100ml Jarabe 30ml", value: "Loratadina", descripcion: "Antihistamínico líquido para rinitis alérgica y urticaria." },
        { label: "Loratadina 10mg 10 Tabletas", value: "Loratadina", descripcion: "Antihistamínico oral para alergias y estornudos." },
        { label: "Loratadina 10mg 10 Tabletas", value: "Loratadina", descripcion: "Tratamiento oral de primera línea para alergias leves." },
        { label: "Loratadina 100mg/100ml Jarabe 60ml", value: "Loratadina", descripcion: "Solución antihistamínica para niños y adultos." },
        { label: "Loratadina, Ambroxol 5mg/30mg Tabletas", value: "Loratadina", descripcion: "Combinación antialérgica y mucolítica para cuadros respiratorios." },
        { label: "Loratadina, Betametasona 5mg/0.25mg 20 Tabletas", value: "Loratadina", descripcion: "Antialérgico con corticoide para inflamación y alergias severas." },
        { label: "Loratadina, Betametasona 5mg/100ml Jarabe 60ml", value: "Loratadina", descripcion: "Solución oral para rinitis alérgica con inflamación." },
        { label: "Losartán 50mg 30 Tabletas", value: "Losartán", descripcion: "Antihipertensivo del grupo de los ARA II." },
        { label: "Magaldrato, Dimeticona 1g/100ml Suspensión 250ml", value: "Magaldrato", descripcion: "Antiácido y antiflatulento para reflujo, gastritis e indigestión." },
        { label: "Maleato de Clorfenamina 4mg 20 Tabletas", value: "Clorfenamina", descripcion: "Antihistamínico sedante para alergias y resfriados." },
        { label: "Meclizina, Piridoxina 16.66mg/1ml Jarabe 15ml", value: "Meclizina", descripcion: "Antivertiginoso con vitamina B6 para náuseas y vértigo." },
        { label: "Meclizina, Piridoxina 25mg/50mg 20 Tabletas", value: "Meclizina", descripcion: "Tratamiento oral de náusea, vértigo y mareo." },
        { label: "Meclizina, Piridoxina 50mg/1ml 5 Ampolletas", value: "Meclizina", descripcion: "Solución inyectable para vértigo, náuseas y vómito severo." },
        { label: "Melatonina 3mg 60 Tabletas", value: "Melatonina", descripcion: "Hormona natural para mejorar la calidad del sueño." },
        { label: "Meloxicam 7.5mg 14 Tabletas", value: "Meloxicam", descripcion: "Antiinflamatorio para dolor crónico o agudo tipo articular." },
        { label: "Meloxicam 15mg 10 Tabletas", value: "Meloxicam", descripcion: "Dosis alta de AINE para dolor osteomuscular." },
        { label: "Meloxicam, Metocarbamol 15mg/215mg 10 Cápsulas", value: "Meloxicam", descripcion: "Antiinflamatorio con relajante muscular para dolor severo." },
        { label: "Meloxicam, Metocarbamol 7.5mg/215mg 20 Cápsulas", value: "Meloxicam", descripcion: "Combinación oral para contracturas, lumbalgias o esguinces." },
        { label: "Metformina-Glibenclamida 1000/5mg 30 Tabletas", value: "Metformina-Glibenclamida", descripcion: "Antidiabético combinado para controlar la glucosa en diabetes tipo 2." },
        { label: "Metamizol Sódico 500mg 10 Tabletas", value: "Metamizol Sódico", descripcion: "Analgésico y antipirético para dolor agudo o fiebre." },
        { label: "Metamizol Sódico 1g/2ml 3 Ampolletas", value: "Metamizol Sódico", descripcion: "Analgésico inyectable para dolor severo o fiebre refractaria." },
        { label: "Metamizol Sódico 250mg/5ml Jarabe 100ml", value: "Metamizol Sódico", descripcion: "Solución oral para fiebre y dolor en niños." },
        { label: "Metformina 850mg 30 Tabletas", value: "Metformina", descripcion: "Antidiabético oral de primera línea para diabetes tipo 2." },
        { label: "Metformina 500mg 30 Tabletas", value: "Metformina", descripcion: "Hipoglucemiante oral para control de glucosa en sangre." },
        { label: "Metocarbamol, Ibuprofeno 375/200mg 12 Cápsulas", value: "Metocarbamol", descripcion: "Relajante muscular y analgésico para contracturas o dolor muscular." },
        { label: "Metocarbamol, Indometacina, Betametazona 25/20/0.75mg 10 Tabletas", value: "Metocarbamol", descripcion: "Combinación para inflamación severa y espasmos musculares." },
        { label: "Metocarbamol, Indometacina, Betametazona 25/20/0.75mg 30 Tabletas", value: "Metocarbamol", descripcion: "Tratamiento oral para procesos inflamatorios y musculares." },
        { label: "Metoclopramida 10mg 20 Tabletas", value: "Metoclopramida", descripcion: "Antiemético y procinético para náuseas y reflujo." },
        { label: "Metoclopramida 10mg/2ml 6 Ampolletas", value: "Metoclopramida", descripcion: "Antiemético inyectable para náuseas o vómito severo." },
        { label: "Metoclopramida 400mg/100ml Solución 20ml", value: "Metoclopramida", descripcion: "Solución oral para náuseas, vómito y reflujo." },
        { label: "Metoprolol 100mg 20 Tabletas", value: "Metoprolol", descripcion: "Betabloqueador para hipertensión, taquicardia o angina." },
        { label: "Metoprolol 100mg 20 Tabletas", value: "Metoprolol", descripcion: "Antihipertensivo que controla el ritmo cardíaco." },
        { label: "Metronidazol 500mg 30 Tabletas", value: "Metronidazol", descripcion: "Antibiótico y antiparasitario para infecciones anaerobias." },
        { label: "Metronidazol 2.5g/100ml Suspensión 120ml", value: "Metronidazol", descripcion: "Suspensión oral para infecciones parasitarias y bacterianas." },
        { label: "Metronidazol 5g/100ml Suspensión 120ml", value: "Metronidazol", descripcion: "Antiparasitario y antibacteriano oral en presentación líquida." },
        { label: "Mometasona 0.05% Spray 18ml (140 dosis)", value: "Mometasona", descripcion: "Corticoide nasal para rinitis alérgica o congestión nasal crónica." },
        { label: "Montelukast 10mg 20 Comprimidos", value: "Montelukast", descripcion: "Antileucotrieno para asma y rinitis alérgica." },
        { label: "Montelukast 5mg 30 Tabletas Masticables", value: "Montelukast", descripcion: "Tratamiento preventivo de asma y alergias en niños." },
        { label: "Mupirocina 2% Ungüento 15g", value: "Mupirocina", descripcion: "Antibiótico tópico para infecciones cutáneas leves." },
        { label: "Nafazolina 1mg/ml Gotas Oftálmicas 15ml", value: "Nafazolina", descripcion: "Descongestionante ocular para enrojecimiento o alergias." },
        { label: "Nafazolina 1mg/ml Spray Nasal 15ml", value: "Nafazolina", descripcion: "Descongestionante nasal de acción rápida." },
        { label: "Nafazolina, Feniramina 3mg/1ml Gotas Oftálmicas 15ml", value: "Nafazolina", descripcion: "Antialérgico ocular con descongestionante para conjuntivitis." },
        { label: "Naproxeno 500mg 10 Tabletas", value: "Naproxeno", descripcion: "Antiinflamatorio para dolor muscular, menstrual o articular." },
        { label: "Naproxeno Sódico 550mg 12 Tabletas", value: "Naproxeno Sódico", descripcion: "AINE para dolor agudo con acción prolongada." },
        { label: "Naproxeno, Carisoprodol 250/200mg 30 Cápsulas", value: "Naproxeno", descripcion: "Analgésico con relajante muscular para contracturas y lumbalgia." },
        { label: "Naproxeno, Paracetamol 100mg/5ml Suspensión 100ml", value: "Naproxeno", descripcion: "Suspensión oral para dolor leve a moderado y fiebre." },
        { label: "Naproxeno, Paracetamol 275/300mg 12 Tabletas", value: "Naproxeno", descripcion: "Doble analgésico para dolor e inflamación." },
        { label: "Naproxeno-Paracetamol 100/200mg 5 Supositorios", value: "Naproxeno", descripcion: "Analgesia rectal para dolor leve a moderado en niños o adultos." },
        { label: "Neomicina, Caolín, Pectina 10g/0.7g/100ml Suspensión 75ml", value: "Neomicina", descripcion: "Antibacteriano y astringente para diarrea infecciosa." },
        { label: "Neomicina, Caolín, Pectina 20g/1g/100ml Suspensión 120ml", value: "Neomicina", descripcion: "Tratamiento antidiarreico con antibiótico oral." },
        { label: "Neomicina, Caolín, Pectina 280/30mg 20 Tabletas", value: "Neomicina", descripcion: "Tabletas orales para diarrea aguda infecciosa." },
        { label: "Neomicina, Polimixina B, Gramicidina 5000UI/25mcg Gotas Oftálmicas 5ml", value: "Neomicina", descripcion: "Colirio antibiótico para infecciones oculares." },
        { label: "Nifedipino 10mg 20 Cápsulas", value: "Nifedipino", descripcion: "Antihipertensivo y vasodilatador para angina e hipertensión." },
        { label: "Nifedipino 30mg 30 Comprimidos", value: "Nifedipino", descripcion: "Bloqueador de canales de calcio para presión alta crónica." },
        { label: "Nistatina 2,400,000 UI Suspensión Oral 100ml", value: "Nistatina", descripcion: "Antifúngico oral para candidiasis bucal o intestinal." },
        { label: "Nitazoxanida 500mg 7 Tabletas", value: "Nitazoxanida", descripcion: "Antiparasitario de amplio espectro para infecciones intestinales." },
        { label: "Nitrato de Miconazol 2% Crema 20g", value: "Miconazol", descripcion: "Antifúngico tópico para infecciones dérmicas por hongos." },
        { label: "Nitrofurantoína 100mg 40 Cápsulas", value: "Nitrofurantoína", descripcion: "Antibiótico urinario para infecciones del tracto urinario." },
        { label: "Norfenefrina 10mg/1ml Solución 24ml", value: "Norfenefrina", descripcion: "Descongestionante nasal y vasoconstrictor." },
        { label: "Norfloxacino 400mg 20 Tabletas", value: "Norfloxacino", descripcion: "Antibiótico para infecciones urinarias o gastrointestinales." },
        { label: "Omeprazol 40mg/10ml 1 Ampolleta", value: "Omeprazol", descripcion: "Inhibidor de bomba de protones inyectable para úlceras o reflujo." },
        { label: "Ondansetrón 8mg 10 Tabletas", value: "Ondansetrón", descripcion: "Antiemético para náuseas por quimioterapia o posoperatorio." },
        { label: "Ondansetrón 8mg/4ml 3 Ampolletas", value: "Ondansetrón", descripcion: "Inyectable contra náuseas intensas y vómito." },
        { label: "Oxeladina, Ambroxol 0.115g/100ml Jarabe 120ml", value: "Oxeladina", descripcion: "Antitusivo y mucolítico para tos productiva o seca." },
        { label: "Oxeladina, Ambroxol 0.225g/100ml Jarabe 120ml", value: "Oxeladina", descripcion: "Jarabe combinado para cuadros respiratorios con tos." },
        { label: "Óxido de Zinc 25% Pasta 100g", value: "Óxido de Zinc", descripcion: "Protector dérmico para dermatitis del pañal o irritaciones." },
        { label: "Oximetazolina 0.05% Spray Nasal 20ml", value: "Oximetazolina", descripcion: "Descongestionante nasal de acción prolongada." },
        { label: "Oximetazolina 0.25% Gotas Oftálmicas 15ml", value: "Oximetazolina", descripcion: "Vasoconstrictor ocular para alivio de ojos rojos o irritados." },
        { label: "Pantoprazol 20mg 7 Tabletas", value: "Pantoprazol", descripcion: "Inhibidor de bomba de protones para reflujo y gastritis." },
        { label: "Pantoprazol 40mg 14 Tabletas", value: "Pantoprazol", descripcion: "Tratamiento de úlceras gástricas y esofagitis por reflujo." },
        { label: "Paracetamol 300mg 3 Supositorios", value: "Paracetamol", descripcion: "Antipirético y analgésico en forma rectal para niños." },
        { label: "Paracetamol 500mg 10 Tabletas", value: "Paracetamol", descripcion: "Analgésico de uso general para fiebre y dolor leve." },
        { label: "Paracetamol 750mg 10 Tabletas", value: "Paracetamol", descripcion: "Analgésico para dolor moderado e inflamación leve." },
        { label: "Paracetamol 100mg/1ml Gotas 15ml", value: "Paracetamol", descripcion: "Solución pediátrica para fiebre o dolor leve." },
        { label: "Paracetamol 1000mg/100ml Suspensión 100ml", value: "Paracetamol", descripcion: "Solución oral para fiebre o dolor en adultos." },
        { label: "Paracetamol 3.2g/100ml Suspensión 120ml", value: "Paracetamol", descripcion: "Analgésico antipirético líquido para administración oral." },
        { label: "Paracetamol, Ácido Acetilsalicílico, Cafeína 250/65mg 24 Tabletas", value: "Paracetamol", descripcion: "Combinación para cefalea tensional o migraña leve." },
        { label: "Paracetamol, Fenilefrina, Clorfenamina 5/2mg 24 Tabletas", value: "Paracetamol", descripcion: "Tratamiento sintomático para resfriado común y congestión." },
        { label: "Paracetamol, Guaifenesina, Fenilefrina, Clorfenamina Suspensión 120ml", value: "Paracetamol", descripcion: "Jarabe multicomponente para tos y síntomas gripales." },
        { label: "Paracetamol, Ibuprofeno 325/200mg 20 Tabletas", value: "Paracetamol", descripcion: "Analgésico combinado para dolor moderado y fiebre." },
        { label: "Paroxetina 20mg 10 Tabletas", value: "Paroxetina", descripcion: "Antidepresivo ISRS usado en trastornos de ansiedad y depresión." },
        { label: "Passiflora, Ignatia, Valeriana 3D/3Dmg 30 Tabletas", value: "Passiflora", descripcion: "Remedio natural para insomnio, ansiedad o estrés leve." },
        { label: "Pentoxifilina 400mg 30 Tabletas", value: "Pentoxifilina", descripcion: "Vasodilatador para trastornos circulatorios periféricos." },
        { label: "Permetrina 5% Crema 60g", value: "Permetrina", descripcion: "Tratamiento tópico para sarna y pediculosis (piojos)." },
        { label: "Permetrina 5g/100ml Loción 120ml", value: "Permetrina", descripcion: "Solución tópica contra parásitos de la piel." },
        { label: "Permetrina Solución 5% Shampoo 10ml", value: "Permetrina", descripcion: "Shampoo antiparasitario para piojos y liendres." },
        { label: "Picosulfato de Sodio 5mg/5ml Solución 120ml", value: "Picosulfato de Sodio", descripcion: "Laxante estimulante para estreñimiento ocasional." },
        { label: "Pinaverio, Dimeticona 100/300mg 16 Cápsulas", value: "Pinaverio", descripcion: "Espasmolítico digestivo para colon irritable o dispepsia." },
        { label: "Plantago Psyllium 40.7g Polvo 400g", value: "Plantago Psyllium", descripcion: "Fibra natural para regular el tránsito intestinal y tratar el estreñimiento." },
        { label: "Pravastatina 10mg 10 Tabletas", value: "Pravastatina", descripcion: "Estatina para reducir colesterol LDL y prevenir enfermedades cardiovasculares." },
        { label: "Prednisona 20mg 30 Tabletas", value: "Prednisona", descripcion: "Corticoide oral para inflamación, alergias o enfermedades autoinmunes." },
        { label: "Prednisona 50mg 20 Tabletas", value: "Prednisona", descripcion: "Dosis alta de esteroide para procesos inflamatorios graves." },
        { label: "Prednisona 5mg 20 Tabletas", value: "Prednisona", descripcion: "Esteroide oral para tratamientos prolongados o leves." },
        { label: "Pregabalina 150mg 28 Cápsulas", value: "Pregabalina", descripcion: "Anticonvulsivo usado para dolor neuropático y ansiedad generalizada." },
        { label: "Pregabalina 75mg 14 Cápsulas", value: "Pregabalina", descripcion: "Analgésico neurológico para neuralgia o fibromialgia." },
        { label: "Propranolol 40mg 30 Tabletas", value: "Propranolol", descripcion: "Betabloqueador para hipertensión, ansiedad y migraña." },
        { label: "Proteína de Soya y Probióticos 5g 6 Sobres", value: "Proteína de Soya", descripcion: "Suplemento nutricional con probióticos para mejorar digestión y nutrición." },
        { label: "Quinfamida, Albendazol 150/200mg 2 Tabletas", value: "Quinfamida", descripcion: "Antiparasitario combinado para amibiasis y helmintiasis intestinal." },
        { label: "Quinfamida, Albendazol 200mg/10ml Suspensión 10ml", value: "Quinfamida", descripcion: "Solución antiparasitaria para infecciones intestinales múltiples." },
        { label: "Quinfamida, Albendazol 400mg/20ml Suspensión 20ml", value: "Quinfamida", descripcion: "Tratamiento oral combinado para parásitos intestinales." },
        { label: "Repelente de Mosquito 60ml Spray", value: "Repelente de Mosquito", descripcion: "Protección tópica contra picaduras de mosquito y otros insectos." },
        { label: "Retinol, Ergocalciferol 400 U.I/3ml 3 Ampolletas", value: "Retinol", descripcion: "Vitaminas A y D para deficiencias nutricionales y fortalecimiento óseo." },
        { label: "Salbutamol 100mcg Inhalador 200 dosis", value: "Salbutamol", descripcion: "Broncodilatador de acción rápida para crisis asmáticas." },
        { label: "Salbutamol 5mg/1ml Solución 10ml", value: "Salbutamol", descripcion: "Solución para nebulización en crisis respiratorias agudas." },
        { label: "Salbutamol, Ambroxol 150mg/100ml Jarabe 120ml", value: "Salbutamol", descripcion: "Combinación broncodilatadora y mucolítica para enfermedades respiratorias." },
        { label: "Senósidos A-B 8.6mg 20 Tabletas", value: "Senósidos A-B", descripcion: "Laxante natural para estreñimiento ocasional." },
        { label: "Sertralina 50mg 20 Cápsulas", value: "Sertralina", descripcion: "Antidepresivo ISRS para depresión, TOC y trastorno de ansiedad." },
        { label: "Shampoo 150ml", value: "Shampoo", descripcion: "Producto capilar para higiene diaria o tratamiento específico (sin especificar)." },
        { label: "Sildenafil 50mg 4 Tabletas", value: "Sildenafil", descripcion: "Tratamiento para disfunción eréctil y mejora del flujo sanguíneo." },
        { label: "Subsalicilato de Bismuto 262mg 24 Tabletas Masticables", value: "Subsalicilato de Bismuto", descripcion: "Antidiarreico y protector gástrico para malestar estomacal." },
        { label: "Subsalicilato de Bismuto 1.750g/100ml Suspensión 120ml", value: "Subsalicilato de Bismuto", descripcion: "Suspensión oral para diarrea, náusea y molestias digestivas." },
        { label: "Sucralfato 1g 40 Tabletas", value: "Sucralfato", descripcion: "Protector gástrico para úlceras y gastritis." },
        { label: "Sulfadiazina de Plata 1% Crema 28g", value: "Sulfadiazina de Plata", descripcion: "Antibacteriano tópico para quemaduras e infecciones dérmicas." },
        { label: "Sumatriptán 50mg 2 Tabletas", value: "Sumatriptán", descripcion: "Tratamiento específico para crisis de migraña." },
        { label: "Tamsulosina 0.4mg 20 Cápsulas", value: "Tamsulosina", descripcion: "Relajante prostático para hiperplasia prostática benigna." },
        { label: "Tamsulosina 0.4mg 20 Cápsulas", value: "Tamsulosina", descripcion: "Tratamiento para mejorar el flujo urinario en hombres." },
        { label: "Telmisartán 40mg 28 Tabletas", value: "Telmisartán", descripcion: "Antihipertensivo del grupo ARA II para presión arterial alta." },
        { label: "Terbinafina 250mg 28 Tabletas", value: "Terbinafina", descripcion: "Antifúngico oral para tiña y onicomicosis." },
        { label: "Terbinafina 1% Crema 30g", value: "Terbinafina", descripcion: "Antifúngico tópico para infecciones dérmicas por hongos." },
        { label: "Tiamina, Piridoxina, Cianocobalamina 5/50mcg 30 Tabletas", value: "Tiamina", descripcion: "Complejo B para deficiencias, fatiga o neuropatía." },
        { label: "Tobramicina 0.3% Gotas Oftálmicas 5ml", value: "Tobramicina", descripcion: "Antibiótico ocular para conjuntivitis e infecciones bacterianas." },
        { label: "Tobramicina, Dexametasona 1mg/1ml Gotas Oftálmicas 5ml", value: "Tobramicina", descripcion: "Antibiótico y corticoide para inflamación e infección ocular." },
        { label: "Tramadol 100mg/2ml 5 Ampolletas", value: "Tramadol", descripcion: "Analgésico opioide para dolor moderado a severo." },
        { label: "Tramadol, Paracetamol 37.5/325mg 20 Tabletas", value: "Tramadol", descripcion: "Combinación analgésica para manejo de dolor agudo." },
        { label: "Trimebutina 200mg 20 Tabletas", value: "Trimebutina", descripcion: "Regulador de motilidad intestinal para colon irritable y dispepsia." },
        { label: "Trimebutina 2g/100ml Suspensión 100ml", value: "Trimebutina", descripcion: "Solución oral para malestares digestivos funcionales." },
        { label: "Trimebutina 2g/100ml Gotas 30ml", value: "Trimebutina", descripcion: "Presentación pediátrica o de precisión para control de espasmos." },
        { label: "Trimetoprima, Sulfametoxazol 160/800mg 14 Tabletas", value: "Trimetoprima", descripcion: "Antibiótico combinado para infecciones urinarias y respiratorias." },
        { label: "Trimetoprima, Sulfametoxazol 200mg/5ml Suspensión 120ml", value: "Trimetoprima", descripcion: "Suspensión pediátrica para infecciones bacterianas diversas." },
        { label: "Trimetoprima, Sulfametoxazol 80/400mg 20 Tabletas", value: "Trimetoprima", descripcion: "Antibiótico oral para infecciones comunes en adultos y niños." },
        { label: "Ursodesoxicólico 300mg 30 Cápsulas", value: "Ursodesoxicólico", descripcion: "Ácido biliar para disolución de cálculos biliares y hepatoprotección." },
        { label: "Valeriana 100mg 20 Tabletas", value: "Valeriana", descripcion: "Sedante natural para insomnio y ansiedad leve." },
        { label: "Vardenafilo 20mg 4 Tabletas", value: "Vardenafilo", descripcion: "Tratamiento para disfunción eréctil." },
        { label: "Venlafaxina 75mg 30 Cápsulas", value: "Venlafaxina", descripcion: "Antidepresivo SNRI para depresión mayor y trastornos de ansiedad." },
        { label: "Vitamina D3 1000 UI 30 Tabletas", value: "Vitamina D3", descripcion: "Suplemento vitamínico para salud ósea y sistema inmunológico." },
        { label: "Vitamina E 400 UI 30 Cápsulas", value: "Vitamina E", descripcion: "Antioxidante natural para piel y salud cardiovascular." },
        { label: "Zinc, Vitamina C, Vitamina D3, Vitamina B6, Vitamina B12, Ácido Fólico 10mg/100mg/1000UI/1.5mg/2.5mcg/200mcg 30 Tabletas", value: "Zinc", descripcion: "Suplemento multivitamínico para fortalecer el sistema inmunológico." },  
      ];
  
      export default medicamentos;