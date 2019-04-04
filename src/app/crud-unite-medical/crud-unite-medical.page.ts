import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { UniteMedicalService } from '../unite-medical.service';
import { UniteMedical } from '../Entities/UniteMedical';


@Component({
  selector: 'app-crud-unite-medical',
  templateUrl: './crud-unite-medical.page.html',
  styleUrls: ['./crud-unite-medical.page.scss'],
})
export class CrudUniteMedicalPage implements OnInit {

  public gouvs = ["Ariana", "Béja", "Ben Arous", "Bizerte",
    "Gabès", "Gafsa", "Jendouba", "Kairouan",
    "Kasserine", "Kébili", "Le Kef", "Mahdia",
    "La Manouba", "Médenine", "Monastir", "Nabeul",
    "Sfax", "Sidi Bouzid", "Siliana", "Sousse",
    "Tataouine", "Tozeur", "Tunis", "Zaghouan"];
  public Ariana = ["Raoued", "Sidi Thabet", "Ariana villes", "La Soukra", "Kalaat Landlous", "Ettadhamen", "Mnihla"];
  public Béja = ["Beja Nord", "Nefza", "Goubellat", "Mjez El Beb", "Amdoun", "Teboursouk", "Testour", "Thibar", "Beja Sud"];
  public Ben_Arous = ["Ezzahra", "Mhamadia", "Rades", "El mourouj", "Fouchana", "Hammam Chatt", "Hammam Lif", "Megrine", "Nouvelle Medina", "Mornag", "Boumhel El Bassatine", "Ben Arous"];
  public Bizerte = ["Menzel Bourguiba", "Utique", "Menzel Jemil", "Bizerte Nord", "Bizerte Sud", "El Alia", "Sejnane", "Ghar El Melh", "Ghezala", "Jarzouna", "Joumine", "Mateur", "Ras Jebel", "Tinja"];
  public Gabès = ["El Metouia", "Gabes Medina", "Gabes Ouest", "Gebes Sud", "El Hamma", "Nouvelle Matmata", "Mareth", "Ghannouche", "Matmata", "Menzel Habib"];
  public Gafsa = ["Belkhir", "El Guettar", "El Ksar", "El Mdhila", "Sned", "Moulares", "Redeyef", "Sidi Aich", "Gafsa Sud", "Metlaoui", "Gafsa Nord"];
  public Jendouba = ["Fernana", "Ghardimaou", "Tabarka", "Jendouba", "Jendouba Nord", "Ain Draham", "Oued Mliz", "Bou Salem", "Balta Bou Aouene"];
  public Kairouan = ["Sbikha", "Kairouan Sud", "Ouselatia", "Nasrallah", "Kairouan Nord", "El Ala", "Hajeb El Ayoun", "Chbika", "Haffouz", "Cherarda", "Bou Hajla"];
  public Kasserine = ["El Ayoun", "Ezzouhour", "Fériana", "Foussana", "Haïdra", "Hassi El Ferid", "Jedelienne", "Kasserine Nord", "Kasserine Sud", "Majel Bel Abbès", "Sbeïtla", "Sbiba", "Thala"];
  public Kébili = ["Douz Nord", "Douz Sud", "Faouar", "Kébili Nord", "Kébili Sud", "Souk Lahad"];
  public Le_Kef = ["Dahmani", "Jérissa", "El Ksour", "Sers", "Kalâat Khasba", "Kalaat Senan", "Kef Est", "Kef Ouest", "Nebeur", "Sakiet Sidi Youssef", "Tajerouine"];
  public Mahdia = ["Bou Merdes", "Chebba", "Chorbane", "El Jem", "Essouassi", "Hebira", "Ksour Essef", "Mahdia", "Melloulèche", "Ouled Chamekh", "Sidi Alouane"];
  public La_Manouba = ["Borj El Amri", "Djedeida", "Douar Hicher", "El Batan", "La Manouba", "Mornaguia", "Oued Ellil", "Tebourba"];
  public Médenine = ["Ben Gardane", "Beni Khedache", "Djerba - Ajim", "Djerba - Houmt Souk", "Djerba - Midoun", "Médenine Nord", "Médenine Sud", "Sidi Makhlouf", "Zarzis"];
  public Monastir = ["Bekalta", "Bembla", "Beni Hassen", "Jemmal", "Ksar Hellal", "Ksibet el-Médiouni", "Moknine", "Monastir", "Ouerdanine", "Sahline", "Sayada-Lamta-Bou Hajar", "Téboulba", "Zéramdine"];
  public Nabeul = ["Béni Khalled", "Béni Khiar", "Bou Argoub", "Dar Chaâbane El Fehri", "El Haouaria", "El Mida", "Grombalia", "Hammam Ghezèze", "Hammamet", "Kélibia", "Korba", "Menzel Bouzelfa", "Menzel Temime", "Soliman"];
  public Sfax = ["Agareb", "Bir Ali Ben Khalifa", "El Amra", "El Hencha", "Graïba", "Jebiniana", "Kerkennah", "Mahrès", "Menzel Chaker", "Sakiet Eddaïer", "Sakiet Ezzit", "Sfax Ouest", "Sfax Sud", "Sfax villes", "Skhira", "Thyna"];
  public Sidi_Bouzid = ["Bir El Hafey", "Cebbala Ouled Asker", "Jilma", "Meknassy", "Menzel Bouzaiane", "Mezzouna", "Ouled Haffouz", "Regueb", "Sidi Ali Ben Aoun", "Sidi Bouzid Est", "Sidi Bouzid Ouest", "Souk Jedid"];
  public Siliana = ["Bargou", "Bou Arada", "El Aroussa", "El Krib", "Gaâfour", "Kesra", "Makthar", "Rouhia", "Sidi Bou Rouis", "Siliana Nord", "Siliana Sud"];
  public Sousse = ["Akouda", "Bouficha", "Enfida", "Hammam Sousse", "Hergla", "Kalâa Kebira", "Kalâa Seghira", "Kondar", "M'saken", "Sidi Bou Ali", "Sidi El Hani", "Sousse Jawhara", "Sousse Médina", "Sousse Riadh", "Sousse Sidi Abdelhamid"];
  public Tataouine = ["Bir Lahmar", "Dehiba", "Ghomrassen", "Remada", "Smâr", "Tataouine Nord", "Tataouine Sud"];
  public Tozeur = ["Degache", "Hazoua", "Nefta", "Tameghza", "Tozeur"];
  public Tunis = ["Bab El Bhar", "Bab Souika", "Carthage", "Cité El Khadra", "Djebel Jelloud", "El Kabaria", "El Menzah", "El Omrane", "El Omrane supérieur", "El Ouardia", "Ettahrir", "Ezzouhour", "Hraïria", "La Goulette", "La Marsa", "Le Bardo", "Le Kram", "Médina", "Séjoumi", "Sidi El Béchir", "Sidi Hassine"];
  public Zaghouan = ["Bir Mcherga", "El Fahs", "Nadhour", "Saouaf", "Zaghouan", "Zriba"];
  public villes = []
  public type: string
  public nom: string
  public gouv: string
  public ville: string
  public codePostal: string
  public data: Array<UniteMedical>
  public title: string
  public btn: string
  public item: UniteMedical
  public a: string

  constructor(
    private router: Router,
    private toastController: ToastController,
    private alert: AlertController,
    private uniteMedical: UniteMedicalService,
    private afDataBase: AngularFireDatabase,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.a = this.route.snapshot.paramMap.get('type')
    if (this.a == "1") {
      this.type = ""
      this.nom = ""
      this.gouv = ""
      this.ville = ""
      this.codePostal = ""
      this.title = "Ajout d'unité medicale"
      this.btn = "Ajouter"
    }
    if (this.a == "2") {
      this.route.queryParams.subscribe(params => {
        this.item = JSON.parse(params.item)
      })
      this.type = this.item.type
      this.nom = this.item.nom
      this.gouv = this.item.gouv
      this.ville = this.item.ville
      this.codePostal = this.item.codePostal
      switch (this.gouv) {
        case "Ariana": {
          this.villes = this.Ariana
          break;
        }
        case "Béja": {
          this.villes = this.Béja
          break;
        }
        case "Ben Arous": {
          this.villes = this.Ben_Arous
          break;
        }
        case "Bizerte": {
          this.villes = this.Bizerte
          break;
        }
        case "Gabès": {
          this.villes = this.Gabès
          break;
        }
        case "Gafsa": {
          this.villes = this.Gafsa
          break;
        }
        case "Jendouba": {
          this.villes = this.Jendouba
          break;
        }
        case "Kairouan": {
          this.villes = this.Kairouan
          break;
        }
        case "Kasserine": {
          this.villes = this.Kasserine
          break;
        }
        case "Kébili": {
          this.villes = this.Kébili
          break;
        }
        case "Le Kef": {
          this.villes = this.Le_Kef
          break;
        }
        case "Mahdia": {
          this.villes = this.Mahdia
          break;
        }
        case "La Manouba": {
          this.villes = this.La_Manouba
          break;
        }
        case "Médenine": {
          this.villes = this.Médenine
          break;
        }
        case "Monastir": {
          this.villes = this.Monastir
          break;
        }
        case "Nabeul": {
          this.villes = this.Nabeul
          break;
        }
        case "Sfax": {
          this.villes = this.Sfax
          break;
        }
        case "Sidi Bouzid": {
          this.villes = this.Sidi_Bouzid
          break;
        }
        case "Siliana": {
          this.villes = this.Siliana
          break;
        }
        case "Sousse": {
          this.villes = this.Sousse
          break;
        }
        case "Tataouine": {
          this.villes = this.Tataouine
          break;
        }
        case "Tozeur": {
          this.villes = this.Tozeur
          break;
        }
        case "Tunis": {
          this.villes = this.Tunis
          break;
        }
        case "Zaghouan": {
          this.villes = this.Zaghouan
          break;
        }
        default: {
          this.villes = []
          break;
        }
      }
      this.title = "Modification d'unité medicale"
      this.btn = "Modifier"
    }
    // if (this.uniteMedical != null) {
    //   this.getData();
    // }
  }
  // async getData() {
  //   const b = await this.afDataBase.list<UniteMedical>('Unité Medical').valueChanges()
  //   b.forEach(y => {
  //     this.data = y.filter((item) => {
  //       return item.key == this.uniteMedical.getKey()
  //     });
  //   })
  // }
  async toastt(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["OK"]
    })
    await alert.present()
  }
  async ajouter() {
    if (this.a == "1") {
      const key = this.afDataBase.list('Unité Medical').push({
        type: this.type,
        nom: this.nom,
        title: "Unité Medical",
        gouv: this.gouv,
        ville: this.ville,
        codePostal: this.codePostal
      });
      this.afDataBase.list('Unité Medical').update(key.key, {
        key: key.key
      })
    }
    if (this.a == "2") {
      //Modifier
      const key = this.afDataBase.list('Unité Medical').update({
        type: this.type,
        nom: this.nom,
        title: "Unité Medical",
        gouv: this.gouv,
        ville: this.ville,
        codePostal: this.codePostal
      });
      this.afDataBase.list('Unité Medical').update(key.key, {
        key: key.key
      })
    }
  }
  onChange($event) {
    switch ($event.target.value) {
      case "Ariana": {
        this.villes = this.Ariana
        break;
      }
      case "Béja": {
        this.villes = this.Béja
        break;
      }
      case "Ben Arous": {
        this.villes = this.Ben_Arous
        break;
      }
      case "Bizerte": {
        this.villes = this.Bizerte
        break;
      }
      case "Gabès": {
        this.villes = this.Gabès
        break;
      }
      case "Gafsa": {
        this.villes = this.Gafsa
        break;
      }
      case "Jendouba": {
        this.villes = this.Jendouba
        break;
      }
      case "Kairouan": {
        this.villes = this.Kairouan
        break;
      }
      case "Kasserine": {
        this.villes = this.Kasserine
        break;
      }
      case "Kébili": {
        this.villes = this.Kébili
        break;
      }
      case "Le Kef": {
        this.villes = this.Le_Kef
        break;
      }
      case "Mahdia": {
        this.villes = this.Mahdia
        break;
      }
      case "La Manouba": {
        this.villes = this.La_Manouba
        break;
      }
      case "Médenine": {
        this.villes = this.Médenine
        break;
      }
      case "Monastir": {
        this.villes = this.Monastir
        break;
      }
      case "Nabeul": {
        this.villes = this.Nabeul
        break;
      }
      case "Sfax": {
        this.villes = this.Sfax
        break;
      }
      case "Sidi Bouzid": {
        this.villes = this.Sidi_Bouzid
        break;
      }
      case "Siliana": {
        this.villes = this.Siliana
        break;
      }
      case "Sousse": {
        this.villes = this.Sousse
        break;
      }
      case "Tataouine": {
        this.villes = this.Tataouine
        break;
      }
      case "Tozeur": {
        this.villes = this.Tozeur
        break;
      }
      case "Tunis": {
        this.villes = this.Tunis
        break;
      }
      case "Zaghouan": {
        this.villes = this.Zaghouan
        break;
      }
      default: {
        this.villes = []
        break
      }
    }
  }
}
