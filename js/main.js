// Hàm chuyển trang đơn giản và hiệu quả
function showPage(pageId) {
    // Ẩn tất cả các trang
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Hiển thị trang được chọn
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Cập nhật trạng thái active trong navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('onclick').includes(pageId)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Thêm hiệu ứng cho các bài viết
window.addEventListener('DOMContentLoaded', () => {
    const posts = document.querySelectorAll('.post');
    posts.forEach((post, index) => {
        setTimeout(() => {
            post.style.opacity = '1';
            post.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});

// Blog posts data
const blogPosts = {
    'java-fundamentals': {
        title: 'Java Fundamentals: Từ Zero đến Hero',
        date: '20/12/2024',
        content: `
            <div class="blog-content">
                <h1>Java Fundamentals: Từ Zero đến Hero</h1>
                <p class="post-meta">Đăng ngày: 20/12/2024</p>
                <img src="images/1678306967729.jpg" alt="Java Fundamentals">
                
                <h2>1. Giới thiệu về Java</h2>
                <p>Java là một trong những ngôn ngữ lập trình phổ biến nhất thế giới, được phát triển bởi Sun Microsystems (nay là Oracle) vào năm 1995. Với triết lý "Write Once, Run Anywhere", Java đã trở thành nền tảng cho hàng triệu ứng dụng trên toàn cầu.</p>

                <h3>Tại sao nên học Java?</h3>
                <ul>
                    <li>Ngôn ngữ đa nền tảng: Chạy được trên mọi hệ điều hành</li>
                    <li>Cộng đồng lớn mạnh: Dễ dàng tìm kiếm giải pháp và học hỏi</li>
                    <li>Thị trường việc làm rộng lớn: Được sử dụng rộng rãi trong doanh nghiệp</li>
                    <li>Hệ sinh thái phong phú: Nhiều framework và thư viện hỗ trợ</li>
                </ul>
                
                <h2>2. Cài đặt Môi trường Java</h2>
                <h3>2.1 Cài đặt JDK</h3>
                <p>JDK (Java Development Kit) là bộ công cụ phát triển Java cần thiết. Để cài đặt:</p>
                <ul>
                    <li>Truy cập Oracle website và tải JDK phiên bản mới nhất</li>
                    <li>Cài đặt và thiết lập biến môi trường JAVA_HOME</li>
                    <li>Kiểm tra cài đặt bằng lệnh: java -version và javac -version</li>
                </ul>

                <h3>2.2 Cài đặt IDE</h3>
                <p>Các IDE phổ biến cho Java development:</p>
                <ul>
                    <li>IntelliJ IDEA: IDE mạnh mẽ với nhiều tính năng thông minh</li>
                    <li>Eclipse: IDE mã nguồn mở phổ biến</li>
                    <li>NetBeans: IDE đa năng từ Apache</li>
                </ul>

                <h2>3. Cú pháp Cơ bản Java</h2>
                <h3>3.1 Cấu trúc Chương trình Java</h3>
                <pre><code>public class HelloWorld {
    // Main method - điểm bắt đầu của chương trình
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}</code></pre>

                <h3>3.2 Kiểu dữ liệu trong Java</h3>
                <p>Java có hai loại kiểu dữ liệu chính:</p>
                
                <h4>Primitive Types:</h4>
                <ul>
                    <li>byte: 8-bit số nguyên có dấu (-128 đến 127)</li>
                    <li>short: 16-bit số nguyên có dấu (-32,768 đến 32,767)</li>
                    <li>int: 32-bit số nguyên có dấu (-2^31 đến 2^31 - 1)</li>
                    <li>long: 64-bit số nguyên có dấu</li>
                    <li>float: 32-bit số thực</li>
                    <li>double: 64-bit số thực</li>
                    <li>boolean: true hoặc false</li>
                    <li>char: 16-bit ký tự Unicode</li>
                </ul>

                <h4>Reference Types:</h4>
                <ul>
                    <li>Classes</li>
                    <li>Interfaces</li>
                    <li>Arrays</li>
                    <li>Enums</li>
                </ul>

                <h2>4. Control Flow</h2>
                <h3>4.1 Câu lệnh điều kiện</h3>
                <pre><code>// If-else statement
if (condition) {
    // code block
} else if (anotherCondition) {
    // code block
} else {
    // code block
}

// Switch statement
switch (variable) {
    case value1:
        // code block
        break;
    case value2:
        // code block
        break;
    default:
        // code block
}</code></pre>

                <h3>4.2 Vòng lặp</h3>
                <pre><code>// For loop
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// While loop
while (condition) {
    // code block
}

// Do-while loop
do {
    // code block
} while (condition);

// Enhanced for loop (for-each)
for (String item : collection) {
    System.out.println(item);
}</code></pre>

                <h2>5. Arrays và Collections</h2>
                <h3>5.1 Arrays</h3>
                <pre><code>// Khai báo và khởi tạo mảng
int[] numbers = new int[5];
String[] names = {"John", "Jane", "Bob"};

// Truy cập phần tử
System.out.println(numbers[0]);

// Duyệt mảng
for (int number : numbers) {
    System.out.println(number);
}</code></pre>

                <h3>5.2 ArrayList</h3>
                <pre><code>import java.util.ArrayList;

ArrayList<String> list = new ArrayList<>();
list.add("First");
list.add("Second");

// Các phương thức thường dùng
list.size();          // Kích thước
list.get(0);          // Lấy phần tử
list.remove(0);       // Xóa phần tử
list.clear();         // Xóa tất cả</code></pre>

                <h2>6. Object-Oriented Programming</h2>
                <h3>6.1 Classes và Objects</h3>
                <pre><code>public class Car {
    // Fields
    private String brand;
    private String model;
    
    // Constructor
    public Car(String brand, String model) {
        this.brand = brand;
        this.model = model;
    }
    
    // Methods
    public void start() {
        System.out.println("Starting the car");
    }
    
    // Getters and Setters
    public String getBrand() {
        return brand;
    }
}</code></pre>

                <h2>7. Exception Handling</h2>
                <pre><code>try {
    // Code có thể gây ra exception
    int result = 10 / 0;
} catch (ArithmeticException e) {
    // Xử lý exception
    System.out.println("Cannot divide by zero");
} finally {
    // Luôn được thực thi
    System.out.println("Finally block");
}</code></pre>

                <h2>8. Best Practices và Tips</h2>
                <ul>
                    <li>Tuân thủ quy tắc đặt tên Java (camelCase cho methods và variables)</li>
                    <li>Sử dụng comments để giải thích code phức tạp</li>
                    <li>Tổ chức code thành các packages logic</li>
                    <li>Sử dụng access modifiers phù hợp</li>
                    <li>Xử lý exceptions đúng cách</li>
                    <li>Viết unit tests cho code</li>
                </ul>

                <h2>9. Tài nguyên học tập</h2>
                <ul>
                    <li>Oracle Java Documentation</li>
                    <li>Java Tutorials Point</li>
                    <li>Stack Overflow</li>
                    <li>GitHub Java Projects</li>
                    <li>Online courses (Coursera, Udemy)</li>
                </ul>

                <h2>10. Kết luận</h2>
                <p>Java là một ngôn ngữ mạnh mẽ với nhiều tính năng và ứng dụng. Việc nắm vững các khái niệm cơ bản sẽ giúp bạn có nền tảng vững chắc để tiến xa hơn trong lập trình Java. Hãy thực hành nhiều và không ngừng học hỏi!</p>
            </div>
        `
    },
    'java-collections': {
        title: 'Java Collections Framework: Toàn Tập',
        date: '15/12/2024',
        content: `
            <div class="blog-content">
                <h1>Java Collections Framework: Toàn Tập</h1>
                <p class="post-meta">Đăng ngày: 15/12/2024</p>
                <img src="images/collection.png" alt="Java Collections">
                
                <h2>1. Tổng quan về Collections Framework</h2>
                <p>Java Collections Framework (JCF) là một kiến trúc thống nhất để lưu trữ và xử lý các nhóm đối tượng. Framework này cung cấp nhiều interface và implementation khác nhau để đáp ứng các nhu cầu khác nhau về hiệu năng và chức năng.</p>

                <h2>2. Hierarchy của Collections Framework</h2>
                <pre><code>Collection (Interface)
├── List (Interface)
│   ├── ArrayList
│   ├── LinkedList
│   └── Vector
│       └── Stack
├── Set (Interface)
│   ├── HashSet
│   ├── LinkedHashSet
│   └── TreeSet
└── Queue (Interface)
    ├── PriorityQueue
    └── Deque (Interface)
        ├── ArrayDeque
        └── LinkedList

Map (Interface)
├── HashMap
├── LinkedHashMap
├── TreeMap
├── WeakHashMap
└── Hashtable</code></pre>

                <h2>3. List Interface</h2>
                <p>List là một interface cho phép lưu trữ các phần tử có thứ tự và cho phép trùng lặp.</p>

                <h3>3.1 ArrayList</h3>
                <pre><code>// Creating ArrayList
ArrayList<String> list = new ArrayList<>();

// Basic operations
list.add("Apple");           // Thêm phần tử
list.add(0, "Banana");      // Thêm vào vị trí cụ thể
list.remove("Apple");       // Xóa phần tử
list.get(0);               // Lấy phần tử
list.set(0, "Orange");     // Cập nhật phần tử
list.size();              // Kích thước
list.clear();             // Xóa tất cả

// Iterating
for (String item : list) {
    System.out.println(item);
}

// Using streams
list.stream()
    .filter(item -> item.startsWith("A"))
    .forEach(System.out::println);</code></pre>

                <h3>3.2 LinkedList</h3>
                <pre><code>LinkedList<String> linkedList = new LinkedList<>();

// Specific LinkedList operations
linkedList.addFirst("First");
linkedList.addLast("Last");
linkedList.getFirst();
linkedList.getLast();
linkedList.removeFirst();
linkedList.removeLast();</code></pre>

                <h2>4. Set Interface</h2>
                <p>Set là một collection không cho phép phần tử trùng lặp.</p>

                <h3>4.1 HashSet</h3>
                <pre><code>// HashSet - Không đảm bảo thứ tự
HashSet<Integer> hashSet = new HashSet<>();
hashSet.add(3);
hashSet.add(1);
hashSet.add(2);
hashSet.add(2);  // Không được thêm vào vì đã tồn tại

// Custom objects trong HashSet
public class Person {
    private String name;
    private int age;

    // Cần override equals() và hashCode()
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Person person = (Person) o;
        return age == person.age && Objects.equals(name, person.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}</code></pre>

                <h3>4.2 TreeSet</h3>
                <pre><code>// TreeSet - Sắp xếp tự động
TreeSet<String> treeSet = new TreeSet<>();
treeSet.add("C");
treeSet.add("A");
treeSet.add("B");
System.out.println(treeSet);  // [A, B, C]

// Custom sorting với Comparator
TreeSet<Person> personSet = new TreeSet<>((p1, p2) -> 
    p1.getName().compareTo(p2.getName()));</code></pre>

                <h2>5. Map Interface</h2>
                <p>Map lưu trữ dữ liệu dưới dạng cặp key-value, trong đó mỗi key là duy nhất.</p>

                <h3>5.1 HashMap</h3>
                <pre><code>// Creating HashMap
HashMap<String, Integer> map = new HashMap<>();

// Basic operations
map.put("One", 1);
map.put("Two", 2);
map.get("One");          // Returns 1
map.remove("Two");
map.containsKey("One");  // Returns true
map.containsValue(1);    // Returns true

// Iterating over Map
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}

// Stream operations
map.entrySet().stream()
    .filter(e -> e.getValue() > 1)
    .forEach(System.out::println);</code></pre>

                <h3>5.2 TreeMap</h3>
                <pre><code>// TreeMap - Sorted by keys
TreeMap<String, Integer> treeMap = new TreeMap<>();
treeMap.put("C", 3);
treeMap.put("A", 1);
treeMap.put("B", 2);

// Navigation methods
treeMap.firstKey();
treeMap.lastKey();
treeMap.higherKey("B");  // Next key
treeMap.lowerKey("B");   // Previous key</code></pre>

                <h2>6. Queue và Deque</h2>
                <h3>6.1 PriorityQueue</h3>
                <pre><code>// Min heap by default
PriorityQueue<Integer> pq = new PriorityQueue<>();
pq.offer(3);
pq.offer(1);
pq.offer(2);
System.out.println(pq.poll());  // Returns 1

// Custom comparator for max heap
PriorityQueue<Integer> maxHeap = new PriorityQueue<>
    (Collections.reverseOrder());</code></pre>

                <h3>6.2 ArrayDeque</h3>
                <pre><code>ArrayDeque<String> deque = new ArrayDeque<>();
deque.addFirst("First");
deque.addLast("Last");
deque.peekFirst();
deque.peekLast();
deque.pollFirst();
deque.pollLast();</code></pre>

                <h2>7. Collections Utility Class</h2>
                <pre><code>List<String> list = new ArrayList<>();
list.add("Banana");
list.add("Apple");
list.add("Orange");

// Sorting
Collections.sort(list);
Collections.reverse(list);
Collections.shuffle(list);

// Searching
int index = Collections.binarySearch(list, "Apple");

// Min/Max
String min = Collections.min(list);
String max = Collections.max(list);

// Immutable collections
List<String> immutableList = Collections.unmodifiableList(list);</code></pre>

                <h2>8. Performance Considerations</h2>
                <table>
                    <tr>
                        <th>Operation</th>
                        <th>ArrayList</th>
                        <th>LinkedList</th>
                        <th>HashSet</th>
                        <th>TreeSet</th>
                    </tr>
                    <tr>
                        <td>Add</td>
                        <td>O(1)</td>
                        <td>O(1)</td>
                        <td>O(1)</td>
                        <td>O(log n)</td>
                    </tr>
                    <tr>
                        <td>Remove</td>
                        <td>O(n)</td>
                        <td>O(1)</td>
                        <td>O(1)</td>
                        <td>O(log n)</td>
                    </tr>
                    <tr>
                        <td>Search</td>
                        <td>O(n)</td>
                        <td>O(n)</td>
                        <td>O(1)</td>
                        <td>O(log n)</td>
                    </tr>
                </table>

                <h2>9. Best Practices</h2>
                <ul>
                    <li>Sử dụng interface thay vì implementation cụ thể</li>
                    <li>Chọn collection phù hợp với use case</li>
                    <li>Cân nhắc thread safety khi cần thiết</li>
                    <li>Override equals() và hashCode() cho custom objects</li>
                    <li>Sử dụng generics để type safety</li>
                </ul>

                <h2>10. Thread-Safe Collections</h2>
                <pre><code>// Synchronized collections
List<String> syncList = Collections.synchronizedList(new ArrayList<>());
Map<String, Integer> syncMap = Collections.synchronizedMap(new HashMap<>());

// Concurrent collections
ConcurrentHashMap<String, Integer> concurrentMap = new ConcurrentHashMap<>();
CopyOnWriteArrayList<String> copyOnWriteList = new CopyOnWriteArrayList<>();</code></pre>
            </div>
        `
    },
    'oop-in-java': {
        title: 'OOP trong Java: Hướng Dẫn Chi Tiết',
        date: '18/12/2024',
        content: `
            <div class="blog-content">
                <h1>OOP trong Java: Hướng Dẫn Chi Tiết</h1>
                <p class="post-meta">Đăng ngày: 18/12/2024</p>
                <img src="images/download.png" alt="OOP in Java">
                
                <h2>1. Giới thiệu về OOP</h2>
                <p>Lập trình hướng đối tượng (Object-Oriented Programming - OOP) là một phương pháp lập trình dựa trên khái niệm về các "đối tượng" chứa dữ liệu và mã. OOP giúp tổ chức code theo cách tự nhiên và dễ bảo trì.</p>

                <h2>2. Bốn Trụ Cột của OOP</h2>
                
                <h3>2.1 Tính Đóng Gói (Encapsulation)</h3>
                <p>Tính đóng gói cho phép che giấu thông tin và chi tiết triển khai bên trong một đối tượng.</p>
                <pre><code>public class BankAccount {
    private double balance;  // Private field
    private String accountNumber;

    // Constructor
    public BankAccount(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    // Public methods to access private fields
    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            notifyDeposit(amount);  // Internal helper method
        }
    }

    private void notifyDeposit(double amount) {
        System.out.println("Deposited: $" + amount);
    }
}</code></pre>

                <h3>2.2 Tính Kế Thừa (Inheritance)</h3>
                <p>Kế thừa cho phép một class dựa trên một class khác, kế thừa các thuộc tính và phương thức của class cha.</p>
                <pre><code>// Base class
public abstract class Animal {
    protected String name;
    protected int age;

    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public abstract void makeSound();

    public void eat() {
        System.out.println(name + " is eating");
    }
}

// Derived class
public class Dog extends Animal {
    private String breed;

    public Dog(String name, int age, String breed) {
        super(name, age);
        this.breed = breed;
    }

    @Override
    public void makeSound() {
        System.out.println(name + " barks: Woof!");
    }

    public void fetch() {
        System.out.println(name + " is fetching the ball");
    }
}</code></pre>

                <h3>2.3 Tính Đa Hình (Polymorphism)</h3>
                <p>Đa hình cho phép xử lý các đối tượng khác nhau một cách thống nhất thông qua interface chung.</p>
                <pre><code>// Interface định nghĩa hành vi chung
public interface Shape {
    double getArea();
    double getPerimeter();
}

// Các class implement interface
public class Circle implements Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }

    @Override
    public double getPerimeter() {
        return 2 * Math.PI * radius;
    }
}

public class Rectangle implements Shape {
    private double width;
    private double height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    @Override
    public double getArea() {
        return width * height;
    }

    @Override
    public double getPerimeter() {
        return 2 * (width + height);
    }
}

// Sử dụng đa hình
public void printShapeInfo(Shape shape) {
    System.out.println("Area: " + shape.getArea());
    System.out.println("Perimeter: " + shape.getPerimeter());
}</code></pre>

                <h3>2.4 Tính Trừu Tượng (Abstraction)</h3>
                <p>Trừu tượng hóa cho phép tập trung vào những tính năng cốt lõi của đối tượng, bỏ qua các chi tiết không cần thiết.</p>
                <pre><code>// Abstract class
public abstract class Vehicle {
    protected String brand;
    protected String model;

    public Vehicle(String brand, String model) {
        this.brand = brand;
        this.model = model;
    }

    // Abstract methods
    public abstract void startEngine();
    public abstract void stopEngine();

    // Concrete method
    public void showInfo() {
        System.out.println("Brand: " + brand + ", Model: " + model);
    }
}

// Concrete class
public class Car extends Vehicle {
    public Car(String brand, String model) {
        super(brand, model);
    }

    @Override
    public void startEngine() {
        System.out.println("Car engine starting...");
    }

    @Override
    public void stopEngine() {
        System.out.println("Car engine stopping...");
    }
}</code></pre>

                <h2>3. Advanced OOP Concepts</h2>
                
                <h3>3.1 Interfaces và Abstract Classes</h3>
                <p>So sánh giữa Interface và Abstract Class:</p>
                <ul>
                    <li>Interface: Định nghĩa contract, không có implementation</li>
                    <li>Abstract Class: Có thể có cả abstract và concrete methods</li>
                    <li>Class có thể implement nhiều interfaces nhưng chỉ extend một abstract class</li>
                </ul>

                <h3>3.2 Composition và Aggregation</h3>
                <pre><code>// Composition example
public class Car {
    private Engine engine;  // Strong relationship

    public Car() {
        engine = new Engine();  // Car owns Engine
    }
}

// Aggregation example
public class University {
    private List<Student> students;  // Weak relationship

    public void addStudent(Student student) {
        students.add(student);  // University uses Student
    }
}</code></pre>

                <h3>3.3 Method Overloading và Overriding</h3>
                <pre><code>public class Calculator {
    // Method overloading
    public int add(int a, int b) {
        return a + b;
    }

    public double add(double a, double b) {
        return a + b;
    }

    public int add(int a, int b, int c) {
        return a + b + c;
    }
}</code></pre>

                <h2>4. Design Patterns in OOP</h2>
                <h3>4.1 Singleton Pattern</h3>
                <pre><code>public class Singleton {
    private static Singleton instance;
    
    private Singleton() {}
    
    public static synchronized Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}</code></pre>

                <h3>4.2 Factory Pattern</h3>
                <pre><code>public interface Animal { void makeSound(); }

public class AnimalFactory {
    public Animal createAnimal(String type) {
        switch (type) {
            case "dog": return new Dog();
            case "cat": return new Cat();
            default: throw new IllegalArgumentException();
        }
    }
}</code></pre>

                <h2>5. Best Practices in OOP</h2>
                <ul>
                    <li>SOLID Principles
                        <ul>
                            <li>Single Responsibility Principle</li>
                            <li>Open/Closed Principle</li>
                            <li>Liskov Substitution Principle</li>
                            <li>Interface Segregation Principle</li>
                            <li>Dependency Inversion Principle</li>
                        </ul>
                    </li>
                    <li>Favor Composition over Inheritance</li>
                    <li>Program to an Interface, not an Implementation</li>
                    <li>Keep classes small and focused</li>
                    <li>Use meaningful names for classes and methods</li>
                </ul>

                <h2>6. Common Pitfalls và Solutions</h2>
                <ul>
                    <li>Overuse of inheritance - Use composition instead</li>
                    <li>Poor encapsulation - Make fields private and use getters/setters</li>
                    <li>God objects - Break into smaller, focused classes</li>
                    <li>Tight coupling - Use dependency injection</li>
                </ul>

                <h2>7. Testing trong OOP</h2>
                <pre><code>@Test
public void testBankAccount() {
    BankAccount account = new BankAccount("123", 1000);
    account.deposit(500);
    assertEquals(1500, account.getBalance(), 0.01);
    
    account.withdraw(200);
    assertEquals(1300, account.getBalance(), 0.01);
}</code></pre>

                <h2>8. Tổng kết</h2>
                <p>OOP là một paradigm mạnh mẽ giúp tổ chức và quản lý code hiệu quả. Việc nắm vững các nguyên lý OOP và áp dụng đúng cách sẽ giúp tạo ra code dễ bảo trì, mở rộng và tái sử dụng.</p>
            </div>
        `
    },

    'modern-javascript': {
        title: 'Modern JavaScript: ES6+ Features',
        date: '12/12/2024',
        content: `
            <div class="blog-content">
                <h1>Modern JavaScript: ES6+ Features</h1>
                <p class="post-meta">Đăng ngày: 12/12/2024</p>
                <img src="images/js_m.png" alt="Modern JavaScript">
                
                <h2>1. Let và Const</h2>
                <p>ES6 giới thiệu hai cách khai báo biến mới:</p>
                <pre><code>// Let - có thể thay đổi giá trị
let count = 1;
count = 2;

// Const - không thể thay đổi giá trị
const API_KEY = "abc123";</code></pre>

                <h2>2. Arrow Functions</h2>
                <p>Arrow functions cung cấp cú pháp ngắn gọn cho function expressions:</p>
                <pre><code>// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Arrow function với nhiều dòng
const multiply = (a, b) => {
    const result = a * b;
    return result;
};</code></pre>

                <h2>3. Template Literals</h2>
                <pre><code>const name = "John";
const greeting = \`Hello, \${name}!
Welcome to our site.\`;  // Multi-line string</code></pre>

                <h2>4. Destructuring</h2>
                <pre><code>// Array destructuring
const [first, second] = [1, 2];

// Object destructuring
const person = { name: "John", age: 30 };
const { name, age } = person;</code></pre>

                <h2>5. Spread và Rest Operators</h2>
                <pre><code>// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}</code></pre>

                <h2>6. Classes</h2>
                <pre><code>class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(\`Hello, I'm \${this.name}\`);
    }
}

class Employee extends Person {
    constructor(name, role) {
        super(name);
        this.role = role;
    }
}</code></pre>

                <h2>7. Modules</h2>
                <pre><code>// utils.js
export const helper = () => {
    // ...
};

// main.js
import { helper } from './utils.js';</code></pre>
            </div>
        `
    },
    'async-javascript': {
        title: 'Async JavaScript: Promise và Async/Await',
        date: '10/12/2024',
        content: `
            <div class="blog-content">
                <h1>Async JavaScript: Promise và Async/Await</h1>
                <p class="post-meta">Đăng ngày: 10/12/2024</p>
                <img src="images/AsyncJavaScript.png" alt="Async JavaScript">
                
                <h2>1. Callbacks và Callback Hell</h2>
                <p>Trước khi có Promises, chúng ta sử dụng callbacks:</p>
                <pre><code>getData(function(a) {
    getMoreData(a, function(b) {
        getMoreData(b, function(c) {
            getMoreData(c, function(d) {
                getMoreData(d, function(e) {
                    // Callback hell!
                });
            });
        });
    });
});</code></pre>

                <h2>2. Promises</h2>
                <p>Promise là một đối tượng đại diện cho việc hoàn thành hoặc thất bại của một hoạt động bất đồng bộ.</p>
                <pre><code>const myPromise = new Promise((resolve, reject) => {
    // Async operation
    if (/* operation successful */) {
        resolve(result);
    } else {
        reject(error);
    }
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.error(error));</code></pre>

                <h2>3. Promise Chaining</h2>
                <pre><code>getData()
    .then(a => getMoreData(a))
    .then(b => getMoreData(b))
    .then(c => getMoreData(c))
    .then(d => getMoreData(d))
    .catch(error => console.error(error));</code></pre>

                <h2>4. Async/Await</h2>
                <p>Async/await làm cho code bất đồng bộ trông giống như code đồng bộ, dễ đọc và maintain hơn:</p>
                <pre><code>async function fetchData() {
    try {
        const a = await getData();
        const b = await getMoreData(a);
        const c = await getMoreData(b);
        return c;
    } catch (error) {
        console.error(error);
    }
}</code></pre>

                <h2>5. Error Handling</h2>
                <pre><code>// Using try/catch with async/await
async function handleErrors() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch data');
    }
}

// Using Promise catch
fetchData()
    .then(handleData)
    .catch(handleError)
    .finally(cleanup);</code></pre>

                <h2>6. Promise Methods</h2>
                <pre><code>// Promise.all - chờ tất cả promises hoàn thành
Promise.all([promise1, promise2, promise3])
    .then(results => console.log(results));

// Promise.race - chờ promise đầu tiên hoàn thành
Promise.race([promise1, promise2])
    .then(result => console.log(result));

// Promise.allSettled - chờ tất cả promises kết thúc
Promise.allSettled([promise1, promise2])
    .then(results => console.log(results));</code></pre>
            </div>
        `
    },
    'dom-manipulation': {
        title: 'DOM Manipulation: Tips và Tricks',
        date: '08/12/2024',
        content: `
            <div class="blog-content">
                <h1>DOM Manipulation: Tips và Tricks</h1>
                <p class="post-meta">Đăng ngày: 08/12/2024</p>
                <img src="images/DOMManipulation.jpg" alt="DOM Manipulation">
                
                <h2>1. Selecting Elements</h2>
                <p>Modern JavaScript cung cấp nhiều cách để select elements:</p>
                <pre><code>// Selecting single elements
const element = document.getElementById('myId');
const element = document.querySelector('.myClass');

// Selecting multiple elements
const elements = document.getElementsByClassName('myClass');
const elements = document.querySelectorAll('.myClass');</code></pre>

                <h2>2. Modifying Elements</h2>
                <pre><code>// Changing content
element.textContent = 'New text';
element.innerHTML = '<span>HTML content</span>';

// Modifying attributes
element.setAttribute('class', 'newClass');
element.classList.add('newClass');
element.classList.remove('oldClass');
element.classList.toggle('active');

// Changing styles
element.style.backgroundColor = 'blue';
element.style.cssText = 'color: red; font-size: 16px;';</code></pre>

                <h2>3. Creating and Removing Elements</h2>
                <pre><code>// Creating elements
const div = document.createElement('div');
div.textContent = 'New Element';
parentElement.appendChild(div);

// Removing elements
element.remove();
parentElement.removeChild(element);</code></pre>

                <h2>4. Event Handling</h2>
                <pre><code>// Adding event listeners
element.addEventListener('click', (e) => {
    console.log('Clicked!');
});

// Event delegation
parentElement.addEventListener('click', (e) => {
    if (e.target.matches('.child-class')) {
        console.log('Child clicked!');
    }
});

// Removing event listeners
const handler = (e) => console.log(e);
element.addEventListener('click', handler);
element.removeEventListener('click', handler);</code></pre>

                <h2>5. DOM Traversal</h2>
                <pre><code>// Navigating the DOM
const parent = element.parentNode;
const children = element.children;
const siblings = element.nextElementSibling;
const previous = element.previousElementSibling;

// Finding specific ancestors
const closest = element.closest('.ancestor-class');</code></pre>

                <h2>6. Performance Tips</h2>
                <p>Một số best practices khi thao tác với DOM:</p>
                <ul>
                    <li>Sử dụng Fragment khi thêm nhiều elements:</li>
                </ul>
                <pre><code>const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
    const element = document.createElement('div');
    fragment.appendChild(element);
}
document.body.appendChild(fragment);</code></pre>

                <ul>
                    <li>Tối ưu reflow/repaint:</li>
                </ul>
                <pre><code>// Bad
for (let i = 0; i < 100; i++) {
    element.style.left = i + 'px';
}

// Good
element.style.cssText = 'display: none;';
for (let i = 0; i < 100; i++) {
    element.style.left = i + 'px';
}
element.style.cssText = '';</code></pre>

                <h2>7. Modern DOM APIs</h2>
                <pre><code>// IntersectionObserver
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('Element is visible');
        }
    });
});

observer.observe(element);

// MutationObserver
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        console.log('DOM changed');
    });
});

observer.observe(element, {
    attributes: true,
    childList: true,
    subtree: true
});</code></pre>
            </div>
        `
    },
    'spring-boot-api': {
        title: 'Spring Boot: Xây Dựng RESTful API',
        date: '05/12/2024',
        content: `
            <div class="blog-content">
                <h1>Spring Boot: Xây Dựng RESTful API</h1>
                <p class="post-meta">Đăng ngày: 05/12/2024</p>
                <img src="images/spring-boot.png" alt="Spring Boot">
                
                <h2>1. Giới thiệu về Spring Boot</h2>
                <p>Spring Boot là một framework giúp đơn giản hóa việc phát triển ứng dụng Spring bằng cách cung cấp các cấu hình mặc định và giảm thiểu công việc cấu hình.</p>

                <h2>2. Cài đặt và Cấu hình</h2>
                <pre><code>// pom.xml
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
&lt;/dependency&gt;</code></pre>

                <h2>3. Tạo REST Controller</h2>
                <pre><code>@RestController
@RequestMapping("/api")
public class UserController {
    
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.findAll();
    }
    
    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return userService.save(user);
    }
}</code></pre>

                <h2>4. Exception Handling</h2>
                <pre><code>@ControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<?> handleResourceNotFoundException(
        ResourceNotFoundException ex, WebRequest request) {
        ErrorDetails errorDetails = new ErrorDetails(
            new Date(), ex.getMessage(), request.getDescription(false));
        return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
    }
}</code></pre>

                <h2>5. Security Configuration</h2>
                <pre><code>@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
            .authorizeRequests()
            .antMatchers("/api/public/**").permitAll()
            .anyRequest().authenticated()
            .and()
            .httpBasic();
    }
}</code></pre>
            </div>
        `
    },
    'design-patterns': {
        title: 'Design Patterns trong Java',
        date: '03/12/2024',
        content: `
            <div class="blog-content">
                <h1>Design Patterns trong Java</h1>
                <p class="post-meta">Đăng ngày: 03/12/2024</p>
                <img src="images/design-patterns.png" alt="Design Patterns">
                
                <h2>1. Creational Patterns</h2>
                <h3>Singleton Pattern</h3>
                <pre><code>public class Singleton {
    private static Singleton instance;
    
    private Singleton() {}
    
    public static synchronized Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}</code></pre>

                <h3>Factory Pattern</h3>
                <pre><code>public interface Animal { void makeSound(); }

public class AnimalFactory {
    public Animal createAnimal(String type) {
        if (type.equals("dog")) {
            return new Dog();
        } else if (type.equals("cat")) {
            return new Cat();
        }
        return null;
    }
}</code></pre>

                <h2>2. Structural Patterns</h2>
                <h3>Adapter Pattern</h3>
                <pre><code>public interface MediaPlayer {
    void play(String audioType, String fileName);
}

public class MediaAdapter implements MediaPlayer {
    AdvancedMediaPlayer advancedMusicPlayer;

    public MediaAdapter(String audioType) {
        if(audioType.equalsIgnoreCase("vlc")) {
            advancedMusicPlayer = new VlcPlayer();
        }
    }
}</code></pre>

                <h2>3. Behavioral Patterns</h2>
                <h3>Observer Pattern</h3>
                <pre><code>public interface Observer {
    void update(String message);
}

public class Subject {
    private List<Observer> observers = new ArrayList<>();
    
    public void attach(Observer observer) {
        observers.add(observer);
    }
    
    public void notifyObservers(String message) {
        for(Observer observer : observers) {
            observer.update(message);
        }
    }
}</code></pre>
            </div>
        `
    },
    'react-hooks': {
        title: 'React Hooks: Toàn Tập',
        date: '01/12/2024',
        content: `
            <div class="blog-content">
                <h1>React Hooks: Toàn Tập</h1>
                <p class="post-meta">Đăng ngày: 01/12/2024</p>
                <img src="images/react-hooks.png" alt="React Hooks">
                
                <h2>1. useState Hook</h2>
                <pre><code>import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}</code></pre>

                <h2>2. useEffect Hook</h2>
                <pre><code>import React, { useState, useEffect } from 'react';

function DataFetcher() {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => setData(data));
            
        return () => {
            // cleanup code
        };
    }, []); // Empty dependency array
    
    return <div>{/* render data */}</div>;
}</code></pre>

                <h2>3. useContext Hook</h2>
                <pre><code>const ThemeContext = React.createContext();

function App() {
    return (
        <ThemeContext.Provider value="dark">
            <ThemedButton />
        </ThemeContext.Provider>
    );
}

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return <button className={theme}>Themed Button</button>;
}</code></pre>
            </div>
        `
    },
    'microservices': {
        title: 'Microservices với Spring Cloud',
        date: '28/11/2024',
        content: `
            <div class="blog-content">
                <h1>Microservices với Spring Cloud</h1>
                <p class="post-meta">Đăng ngày: 28/11/2024</p>
                <img src="images/microservices.png" alt="Microservices">
                
                <h2>1. Service Discovery với Eureka</h2>
                <pre><code>@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaServerApplication.class, args);
    }
}

// Client configuration
@SpringBootApplication
@EnableDiscoveryClient
public class ServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(ServiceApplication.class, args);
    }
}</code></pre>

                <h2>2. API Gateway với Spring Cloud Gateway</h2>
                <pre><code>@Configuration
public class GatewayConfig {
    @Bean
    public RouteLocator customRouteLocator(
            RouteLocatorBuilder builder) {
        return builder.routes()
            .route("user_route", r -> r
                .path("/users/**")
                .uri("lb://user-service"))
            .route("order_route", r -> r
                .path("/orders/**")
                .uri("lb://order-service"))
            .build();
    }
}</code></pre>

                <h2>3. Circuit Breaker với Resilience4j</h2>
                <pre><code>@CircuitBreaker(name = "userService")
@GetMapping("/users/{id}")
public User getUser(@PathVariable Long id) {
    return userServiceClient.getUser(id);
}

@CircuitBreaker(name = "userService", fallbackMethod = "getUserFallback")
public User getUserFallback(Long id, Exception ex) {
    return new User(); // Return default user
}</code></pre>
            </div>
        `
    }
};

// Helper function để lấy ID bài viết từ tiêu đề
function getPostIdFromTitle(title) {
    const titleMap = {
        'Java Fundamentals: Từ Zero đến Hero': 'java-fundamentals',
        'OOP trong Java: Hướng Dẫn Chi Tiết': 'oop-in-java',
        'Java Collections Framework: Toàn Tập': 'java-collections',
        'Modern JavaScript: ES6+ Features': 'modern-javascript',
        'Async JavaScript: Promise và Async/Await': 'async-javascript',
        'DOM Manipulation: Tips và Tricks': 'dom-manipulation',
        'Spring Boot: Xây Dựng RESTful API': 'spring-boot-api',
        'Design Patterns trong Java': 'design-patterns',
        'React Hooks: Toàn Tập': 'react-hooks',
        'Microservices với Spring Cloud': 'microservices'
    };
    return titleMap[title];
}

// Xử lý hiện modal khi click vào bài viết
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('postModal');
    const modalBody = modal.querySelector('.modal-body');
    const closeBtn = modal.querySelector('.close-modal');
    
    // Thêm sự kiện click cho tất cả các nút "Đọc thêm"
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const postId = getPostIdFromTitle(
                button.closest('.post').querySelector('h3').textContent
            );
            if (postId && blogPosts[postId]) {
                modalBody.innerHTML = blogPosts[postId].content;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Đóng modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Đóng modal khi click bên ngoài
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// Thêm hiệu ứng scroll smooth cho modal
modalBody.addEventListener('scroll', () => {
    requestAnimationFrame(() => {
        const scrolled = modalBody.scrollTop;
        const header = modalBody.querySelector('h1');
        if (header) {
            if (scrolled > 100) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        }
    });
});

getData()
    .then(a => getMoreData(a))
    .then(b => getMoreData(b))
    .then(c => getMoreData(c))
    .then(d => getMoreData(d))
    .catch(error => console.error(error)); 