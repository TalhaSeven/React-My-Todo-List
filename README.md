# Todo Uygulaması

Bu uygulama, kullanıcının yapılacakları ekleyebileceği, düzenleyebileceği ve silebileceği bir todo listesi sunmaktadır. React ve axios kütüphanelerini kullanarak oluşturulmuştur.

## Nasıl Çalışır?

Uygulama, kullanıcı arayüzünü React bileşenleriyle oluşturur ve axios kütüphanesini kullanarak mockAPI ile iletişim kurar. Kullanıcının todo eklemek, düzenlemek veya silmek istediği durumlarda, ilgili işlevler çağrılarak API ile etkileşim sağlanır.

Uygulama, aşağıdaki bileşenlerden oluşmaktadır:

- **Home**: Ana bileşen, TodoApp ve TodoList bileşenlerini içerir. Todo listesini yönetmek için todoItems state değişkenini kullanır ve getTodos fonksiyonunu kullanarak todo listesini alır.
- **TodoApp**: Kullanıcıya yeni bir todo eklemesi için bir form sunar. Kullanıcı todo ve açıklama girdikten sonra formu gönderdiğinde, axios kütüphanesi kullanılarak mock API'ya bir POST isteği gönderilir. Sonrasında, getTodos fonksiyonu çağrılarak todo listesi güncellenir.
- **TodoList**: Todo listesini görüntüler ve her bir todo öğesi için düzenleme ve silme işlemlerini gerçekleştirebilecek düğmeler sağlar. Kullanıcı bir todo öğesini düzenlemek veya silmek istediğinde, ilgili işlevler çağrılır ve axios kullanılarak mock API üzerinde gerekli işlemler gerçekleştirilir. Todo listesinin güncellenmesi için getTodos fonksiyonu kullanılır.
- **TodoEdit**: Bir todo öğesini düzenlemek için bir düzenleme modalı sunar. Kullanıcı todo adını ve açıklamayı düzenledikten sonra "Save & Close" düğmesine basarak düzenlemeyi kaydedebilir. Düzenleme işlemi, handleEdit fonksiyonu aracılığıyla gerçekleştirilir.