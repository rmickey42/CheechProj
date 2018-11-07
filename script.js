var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('draw'), antialias: true});
renderer.setClearColor(0x00000);
renderer.setSize(window.innerWidth, window.innerHeight);

var camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 
0.1, 3000);

var scene = new THREE.Scene();

var light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

var light1 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light1);

var cubes = [];

for(var i = 1; i <= 20; i++)
{
    for(var j = 1; j <= 50; j++)
    {
        noise.seed(Math.random());
        var value = noise.simplex2((j-25*20), i);
        var cubeGeom = new THREE.CubeGeometry(20, 20, 20);
        var cubeMat = new THREE.MeshLambertMaterial({color: 0x00ffff});
        var cube = new THREE.Mesh(cubeGeom, cubeMat);
        cube.position.set((j-25)*20, Math.abs(value*30),-20*i);
        cubes.push(cube);
        scene.add(cubes[(((i-1)*50)+j)-1]);
    }
}

camera.position.y = 200;
camera.position.x = 0;
camera.position.z = 400;

var animate = function()
{
    window.requestAnimationFrame(animate);
    renderer.render(scene, camera);
    
    //camera.rotation.x -= 0.001;
    
    /*for(var i = 1; i <= 5; i++)
    {
        for(var j = 1; j <= 50; j++)
        {
            cubes[(((i-1)*50)+j)-1].rotation.x+=0.01;
            cubes[(((i-1)*50)+j)-1].rotation.y+=0.01;
        }
    }*/
};
animate();