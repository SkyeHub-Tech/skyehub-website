from PIL import Image

def remove_white_bg_flood(input_path, output_path, tolerance=30):
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    
    # Create a mask for pixels to keep/remove
    # 0 = unvisited, 1 = background, 2 = foreground
    mask = [[0 for _ in range(height)] for _ in range(width)]
    
    def is_bg_color(pixel):
        return all(c >= 255 - tolerance for c in pixel[:3])
    
    pixels = img.load()
    
    # Flood fill from the corners
    corners = [(0, 0), (width-1, 0), (0, height-1), (width-1, height-1)]
    queue = []
    
    for cx, cy in corners:
        if is_bg_color(pixels[cx, cy]):
            queue.append((cx, cy))
            mask[cx][cy] = 1
            
    # Directions for flooding
    directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]
    
    while queue:
        x, y = queue.pop(0)
        
        for dx, dy in directions:
            nx, ny = x + dx, y + dy
            if 0 <= nx < width and 0 <= ny < height and mask[nx][ny] == 0:
                if is_bg_color(pixels[nx, ny]):
                    mask[nx][ny] = 1
                    queue.append((nx, ny))
                else:
                    mask[nx][ny] = 2
                    
    # Now modify the image based on the mask
    for x in range(width):
        for y in range(height):
            if mask[x][y] == 1:
                pixels[x, y] = (255, 255, 255, 0)
                
    img.save(output_path, "PNG")

remove_white_bg_flood("public/handees-mockup.png", "public/handees-mockup-nobg-flood.png")
print("Done!")
