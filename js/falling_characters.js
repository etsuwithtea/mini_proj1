// Falling 2D Pixel Images Animation
class FallingCharacters {
    constructor() {
        this.container = document.getElementById('fallingCharacters');
        this.pixelImages = [
            'allay_spawn_egg.png', 'armadillo_spawn_egg.png', 'axolotl_spawn_egg.png',
            'bat_spawn_egg.png', 'bee_spawn_egg.png', 'blaze_spawn_egg.png',
            'cat_spawn_egg.png', 'chicken_spawn_egg.png', 'cow_spawn_egg.png',
            'creeper_spawn_egg.png', 'dolphin_spawn_egg.png', 'enderman_spawn_egg.png',
            'fox_spawn_egg.png', 'frog_spawn_egg.png', 'ghast_spawn_egg.png',
            'goat_spawn_egg.png', 'horse_spawn_egg.png', 'llama_spawn_egg.png',
            'ocelot_spawn_egg.png', 'panda_spawn_egg.png', 'parrot_spawn_egg.png',
            'pig_spawn_egg.png', 'rabbit_spawn_egg.png', 'sheep_spawn_egg.png',
            'slime_spawn_egg.png', 'spider_spawn_egg.png', 'squid_spawn_egg.png',
            'turtle_spawn_egg.png', 'wolf_spawn_egg.png', 'zombie_spawn_egg.png'
        ];
        this.init();
    }

    init() {
        // Create initial characters
        for (let i = 0; i < 15; i++) {
            this.createCharacter();
        }

        // Continue creating characters at intervals
        setInterval(() => {
            this.createCharacter();
        }, 800);

        // Clean up old characters periodically
        setInterval(() => {
            this.cleanup();
        }, 5000);
    }

    createCharacter() {
        const character = document.createElement('img');
        character.className = 'character';
        
        // Random pixel image from the array
        const randomImage = this.pixelImages[Math.floor(Math.random() * this.pixelImages.length)];
        
        // Check if we're in a subfolder (page folder) or root
        const currentPath = window.location.pathname;
        const isInPageFolder = currentPath.includes('/page/');
        const imagePath = isInPageFolder ? `../image/pixel_item/${randomImage}` : `image/pixel_item/${randomImage}`;
        
        character.src = imagePath;
        character.alt = 'falling pixel item';
        
        // Random horizontal position
        const xPosition = Math.random() * 100;
        character.style.left = xPosition + '%';
        
        // Random animation duration (fall speed)
        const duration = 8 + Math.random() * 12; 
        character.style.animationDuration = duration + 's';
        
        // Random delay before starting
        const delay = Math.random() * 3;
        character.style.animationDelay = delay + 's';
        
        // Random size - perfect for pixel items
        const size = 24 + Math.random() * 24; 
        character.style.width = size + 'px';
        character.style.height = size + 'px';
        
        // Random opacity
        const opacity = 0.2 + Math.random() * 0.2; 
        character.style.opacity = opacity;
        
        // Random rotation for variety
        const rotation = Math.random() * 360;
        character.style.transform = `rotate(${rotation}deg)`;
        
        this.container.appendChild(character);
    }

    cleanup() {
        const characters = this.container.querySelectorAll('.character');
        // Remove characters that have been around for too long
        characters.forEach((char, index) => {
            if (index < characters.length - 20) { 
                char.remove();
            }
        });
    }
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new FallingCharacters();
});
